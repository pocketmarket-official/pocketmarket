import json
import os
import requests
from datetime import datetime
from django.conf import settings
from django.contrib.auth import login
from django.core.files.base import ContentFile
from django.db import transaction
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import View
from django.views.decorators.csrf import csrf_exempt
from items.models import Item
from trades.models import SaleHeader
from trades.models import SaleDetail
from trades.models import CardLog
from stores.models import StoreLike
from stores.models import Store
from time import localtime
from time import strftime
from users.models import User

from fcm_django.models import FCMDevice

import firebase_admin
from firebase_admin import credentials



##
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


class KakaoException(Exception):
    pass

def kakao_login(request):
    ''' use kakao oauth '''
    client_id = os.environ.get('KAKAO_KEY')
    state = os.environ.get('STATE')

    if state == 'local:start' or state == 'local:build':
        redirect_uri = '/login/kakao/callback/' #URL EXCHANGE RELATIVE
    elif state == 'dev':
        redirect_uri = 'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com/login/kakao/callback/'
    elif state == 'server:appDeploy':
        redirect_uri = 'http://13.124.90.138:8000/login/kakao/callback/'

    return HttpResponseRedirect(
        f'https://kauth.kakao.com/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code'
    )

def kakao_callback(request):
    ''' sign in and log in with kakao '''
    try:

        # cred = credentials.Certificate("../../pocket-market-ddc08-firebase-adminsdk-nlmru-0985fb13eb.json")
        # firebase_admin.initialize_app(cred)
        # device = FCMDevice.objects.all().first()


        code = request.GET.get('code', None)
        client_id = os.environ.get('KAKAO_KEY')
        client_secret = os.environ.get('KAKAO_SECRET')
        state = os.environ.get('STATE')
        if state == 'local:start' or state == 'local:build' or state == 'local:dev':
            redirect_uri = 'http://localhost:8000/login/kakao/callback/'  # URL EXCHANGE LOCAL
        elif state == 'dev':
            redirect_uri = 'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com/login/kakao/callback/'
        elif state == 'server:appDeploy':
            redirect_uri = 'http://13.124.90.138:8000/login/kakao/callback/'
        if code is not None:
            # get access_token with the code
            request_api = requests.post(
                f'https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_uri}&code={code}',
            )
            result_json = request_api.json()
            error = result_json.get('error', None)
            if error is not None:
                raise KakaoException()
            else:
                access_token = result_json.get('access_token')
                profile_request = requests.get(
                    'https://kapi.kakao.com/v2/user/me',
                    headers={
                        'Authorization': f'Bearer {access_token}',
                    },
                )
                profile_json = profile_request.json()
                kakao_id = profile_json.get('id')

                if kakao_id is not None:
                    name = profile_json.get("properties")['nickname']
                    try:
                        picture = profile_json.get("properties")['profile_image']
                    except:
                        picture = None
                    email = profile_json.get("kakao_account")["email"]
                    if email is None:
                        raise KakaoException()
                    try:
                        user = User.objects.get(email=email)
                    except:
                        user = User.objects.create(
                            username=email,
                            email=email,
                            profileName=name,
                        )
                        user.set_unusable_password()
                        user.save()
                        # get image file from the url
                        if picture is not None:
                            photo_request = requests.get(picture)
                            user.profileImage.save(f"{name}_avatar", ContentFile(photo_request.content))
                    login(request, user)


                    if state == 'local:start' or state == 'local:dev':
                        url = f'http://localhost:3000/makingCookie/{access_token}/{email}'  # URL EXCHANGE RELATIVE
                    elif state == 'local:build':
                        url = 'http://localhost:3000/index/'
                    elif state == 'dev':
                        url = 'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com/index/'
                    elif state == 'server:appDeploy':
                        url = 'http://13.124.90.138:3000/index/'
                    return HttpResponseRedirect(url)
                else:
                    raise KakaoException()
    except KakaoException:
        if state == 'local:start':
            url = '/login/'  # URL EXCHANGE RELATIVE
        elif state == 'local:build':
            url = 'http://localhost:8000/login/'
        elif state == 'dev':
            url = 'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com/login/'
        elif state == 'server:appDeploy':
            url = 'http://13.124.90.138:8000/login/'
        return HttpResponseRedirect(url)


def saveToken(request):
    try:
        user_email = json.loads(request.body)['user_email']
        token = json.loads(request.body)['fcmToken']
        user = User.objects.get(email=user_email)
        print("--------1----------")
        print(token)
        print(user)


        iosToken, flag = FCMDevice.objects.get_or_create(registration_id=token,
                                                        defaults={
                                                            'user': user,
                                                            'registration_id': token
                                                        })
        print("--------2----------")
        print(iosToken)

        user.iosToken = iosToken
        user.save()

        return

    except Exception as ex:
        print(ex)


@csrf_exempt
@transaction.atomic
def trade(request):
    try:
        # variable defintion
        saleHeaderList = []
        saleDetailList = []
        cardLogList = []
        saleDetailObjList = []
        # constant
        compCd = 'C0028'
        terminalId = '0001000200'
        vanCd = '11'
        # parameter fromrequest
        storeCd = Store.objects.get(id=json.loads(request.body)['storeId']).storeCd
        user = User.objects.get(id=json.loads(request.body)['userId'])
        # storeCd = f'{json.loads(request.body)["storeCd"]:05}'
        posNo = '01'
        dcAmt = 0.0

        # etc variables
        saleDt = datetime.today().strftime('%Y%m%d')
        weekday = ((datetime.today().weekday()) + 2) % 7
        if weekday == 0:
            weekday = 7
        saleTime = strftime('%H%M%S', localtime())
        saleFlag = '1'
        mealCd = '9'
        mealName = '기타'
        billNo = SaleHeader.objects.filter(storeCd=storeCd, posNo=posNo, saleDt=saleDt).order_by('-billNo')

        ##definition for trade variables
        # saleHeader
        headerTotQty = 0
        headerTotSaleAmt = 0.0
        headerTotDcAmt = 0.0
        headerPointDcAmt = 0.0
        headerPointDcCnt = 0.0
        headerCardAmt = 0.0
        headerKkmAmt = 0.0

        # cardLog
        cardSeq = 1
        cardCardAmt = 0.0
        cardInstFlag = 'N'
        cardInstMont = 0

        if billNo:
            billNo = f'{int(billNo[0].billNo) + 1:04}'
        else:
            billNo = '0001'

        i = 1
        for item in json.loads(request.body)['sellItemList']:
            target = Item.objects.get(itemCd=item['itemCd'])
            headerTotSaleAmt += target.price * item['qty']  # sum(saleprice * qty)
            headerTotQty += item['qty']
            saleDetailObj = SaleDetail.objects.create(
                storeCd=storeCd,
                saleDt=saleDt,
                posNo=posNo,
                billNo=billNo,
                seq=i,
                saleFlag=saleFlag,
                orderType=str(item['orderType']),
                itemCd=item['itemCd'],
                itemName=target.itemName,
                qty=item['qty'],
                itemSellGroup=str(item['itemSellGroup']),
                itemSellLevel=str(item['itemSellLevel']),
                itemSellType=str(item['itemSellType']),
                saleCost=target.price,
                salePrice=target.price - dcAmt,
                orgSalePrice=target.price,
                totSaleAmt=target.price * item['qty'],
                saleAmt=(target.price * item['qty']) - dcAmt, #totSaleAmt - dcAmt
                supAmt=((target.price * item['qty']) - dcAmt) / 1.1, #saleAmt*1.1
                taxAmt=((target.price * item['qty']) - dcAmt) - (((target.price * item['qty']) - dcAmt) / 1.1), #saleAmt-supAmt
                offTaxAmt=0.0,
                taxYn='Y',
                totDcAmt=0.0,
                pointDcAmt=0.0,
                saleTime=saleTime,
                sendYn='N',
            )
            saleDetailObjList.append(saleDetailObj)

            i += 1

        i = 1
        payment = json.loads(request.body)['data']
        if payment['method'] == 'card':
            headerCardAmt += payment['price']  # 카드결제금액 더해가는 방식
            cardSeq = i
            cardCardAmt += payment['price']
            cardCardNo = payment['card_no']
            cardVanCd = '001'  # todo: asp에 nice pg코드 등록
            cardCardCd = '001'  # 발급사 #todo: asp cardCode와 맞추기
            cardCardName = payment['card_code']  # todo: asp cardNamerhk 맞추기
            cardApprNo = payment['order_id'].split('_')[0]
            cardApprDt = payment['purchased_at'].split(' ')[0].split('-')[0] \
                         + payment['purchased_at'].split(' ')[0].split('-')[1] \
                         + payment['purchased_at'].split(' ')[0].split('-')[2]
            cardApprTime = payment['purchased_at'].split(' ')[1].split(':')[0] \
                           + payment['purchased_at'].split(' ')[1].split(':')[1] \
                           + payment['purchased_at'].split(' ')[1].split(':')[2]
            cardTerminalId = terminalId
            # cardRegisterNo =  payment['receipt_id']  # todo: 이거뭐임?
            cardRegisterNo = ''
        # for payment in json.loads(request.body)['data']:
        #     if payment['method'] == 'card':
        #         headerCardAmt += payment['price']  # 카드결제금액 더해가는 방식
        #         cardSeq = i
        #         cardCardAmt += payment['price']
        #         cardCardNo = payment['card_no']
        #         cardVanCd = '001'  # todo: asp에 nice pg코드 등록
        #         cardCardCd = '001'  # 발급사 #todo: asp cardCode와 맞추기
        #         cardCardName = 'card_code'  # todo: asp cardNamerhk 맞추기
        #         cardApprNo = payment['order_id'].split('_')['0']
        #         cardApprDt = payment['order_id'].split('_')['0'].split['-'][0]\
        #                      + payment['order_id'].split('_')['0'].split['-'][1]\
        #                      + payment['order_id'].split('_')['0'].split['-'][2]
        #         cardApprTime = payment['order_id'].split('_')['1'].split[':'][0]\
        #                      + payment['order_id'].split('_')['1'].split[':'][1]\
        #                      + payment['order_id'].split('_')['1'].split[':'][2]
        #         cardTerminalId = terminalId
        #         cardRegisterNo = payment['receipt_no'] #todo: 이거뭐임?
        #     elif payment['method'] == '':
        #         headerTotDcAmt += payment['amount']
        #         headerPointDcAmt += payment['amount']
        #         headerPointDcCnt += 1

            i += 1

        headerSaleAmt = headerTotSaleAmt - headerTotDcAmt
        headerSupAmt = headerSaleAmt / 1.1
        headerTaxAmt = headerSaleAmt - headerSupAmt
        headerOffTaxAmt = 0.0


        saleHeaderObj = SaleHeader.objects.create(
            storeCd=storeCd,
            saleDt=saleDt,
            posNo=posNo,
            billNo=billNo,
            saleFlag=saleFlag,
            totQty=headerTotQty,
            totSaleAmt=headerTotSaleAmt,
            saleAmt=headerSaleAmt,
            supAmt=headerSupAmt,
            taxAmt=headerTaxAmt,
            offTaxAmt=headerOffTaxAmt,
            totDcAmt=headerTotDcAmt,
            pointDcAmt=headerPointDcAmt,
            pointDcCnt=headerPointDcCnt,
            cardAmt=headerCardAmt,
            kkmAmt=headerKkmAmt,
            returnYn='N',
            orgStoreCd='',
            orgSaleDt='',
            orgPosNo='',
            orgBillNo='',
            sendYn='N',
            orderStatus='2',
            user = user
        )


        cardLogObj = CardLog.objects.create(
            storeCd=storeCd,
            saleDt=saleDt,
            posNo=posNo,
            billNo=billNo,
            seq=cardSeq,
            saleFlag=saleFlag,
            cardAmt=cardCardAmt,
            cardNo=cardCardNo,
            vanCd=cardVanCd,
            cardCd=cardCardCd,
            cardName=cardCardName,
            apprNo=cardApprNo,
            apprDt=cardApprDt,
            apprTime=cardApprTime,
            apprFlag='1',
            instFlag=cardInstFlag,
            instMonth=cardInstMont,
            terminalId=cardTerminalId,
            registerNo=cardRegisterNo,
            returnYn='N',
            orgStoreCd='',
            orgSaleDt='',
            orgPosNo='',
            orgBillNo='',
            orgSeq=None,
            orgApprNo='',
            remark='',
            sendYn='N',
        )


        saleHeaderRow = {
            "COMP_CD": compCd,
            "STOR_CD": saleHeaderObj.storeCd,
            "SALE_DT": saleHeaderObj.saleDt,
            "POS_NO": saleHeaderObj.posNo,
            "BILL_NO": saleHeaderObj.billNo,
            "SALE_TP": "2",  # 판매 형태 [1:매장판매 / 2:선주문 / 3:DRIVE_THRU / 4: DELIVERY ]
            "ONOFF_TP": "1",  # 온라인 오프라인 형태, 온라인주문일경우 1
            "ORD_FG": "4",  # 주문형태 1:일반 / 2:콜 / 3:인터넷 / 4:모바일 / 5.kiosk
            "SALE_TM": saleTime,  # 판매시간(시간분초)
            "SALE_DAY": weekday,  # 일요일 1 부터 7까지
            "SALE_TM_CD": "01",  # 시간코드 공통코드 045번 참조 #todo: 뭔솔?
            "RETURN_FG": saleHeaderObj.returnYn,  # 반품플레그(원거래에도 업데이트 해줘야함)
            "SALE_FG": saleHeaderObj.saleFlag,
            "MEAL_CD": mealCd,
            "MEAL_NM": mealName,
            "TOT_QTY": saleHeaderObj.totQty,
            "TOT_SALE_AMT": saleHeaderObj.totSaleAmt,
            "SALE_AMT": saleHeaderObj.saleAmt,
            "SUP_AMT": saleHeaderObj.supAmt,
            "TAX_AMT": saleHeaderObj.taxAmt,
            "OFF_TAX_AMT": saleHeaderObj.offTaxAmt,
            "TOT_DC_AMT": saleHeaderObj.totDcAmt,
            "NORM_DC_AMT": 0.0,
            "PNT_DC_AMT": saleHeaderObj.pointDcAmt,
            "NORM_DC_CNT": 0,
            "PNT_DC_CNT": saleHeaderObj.pointDcCnt,
            "CASH_AMT": 0.0,
            "CARD_AMT": saleHeaderObj.cardAmt,
            "ETC_AMT": 0.0
        }

        for saleDetailObj in saleDetailObjList:
            saleDetailRow = {
                "COMP_CD": compCd,
                "STOR_CD": saleDetailObj.storeCd,
                "SALE_DT": saleDetailObj.saleDt,
                "POS_NO": saleDetailObj.posNo,
                "BILL_NO": saleDetailObj.billNo,
                "SEQ": saleDetailObj.seq,
                "SALE_FG": saleDetailObj.saleFlag,
                "ORD_TP": saleDetailObj.orderType,
                "MEAL_CD": mealCd,
                "MEAL_NM": mealName,
                "CNR_CD": "",
                "CNR_NM": "",
                "ITEM_CD": saleDetailObj.itemCd,
                "ITEM_NM": saleDetailObj.itemName,
                "QTY": saleDetailObj.qty,
                "ITEM_SELL_GRP": saleDetailObj.itemSellGroup,
                "ITEM_SELL_LV": saleDetailObj.itemSellLevel,
                "ITEM_SELL_TY": saleDetailObj.itemSellType,
                "SALE_COST": saleDetailObj.saleCost,
                "SALE_PRIC": saleDetailObj.salePrice,
                "ORG_SALE_PRIC": saleDetailObj.orgSalePrice,
                "TOT_SALE_AMT": saleDetailObj.totSaleAmt,
                "SALE_AMT": saleDetailObj.saleAmt,
                "SUP_AMT": saleDetailObj.supAmt,
                "TAX_AMT": saleDetailObj.taxAmt,
                "OFF_TAX_AMT": saleDetailObj.offTaxAmt,
                "TAX_YN": saleDetailObj.taxYn,
                "TOT_DC_AMT": saleDetailObj.totDcAmt,  # todo: 로직 생각하기
                "NORM_DC_AMT": 0.0,
                "PNT_DC_AMT": saleDetailObj.pointDcAmt,
                "SALE_TM": saleDetailObj.saleTime,
                "SALE_YN": "Y",  # 매출포함여부
            }
            saleDetailList.append(saleDetailRow)

        if not cardLogObj.orgSeq:
            cardLogObj.orgSeq = ""

        cardLogRow = {
            "COMP_CD": compCd,
            "STOR_CD": cardLogObj.storeCd,
            "SALE_DT": cardLogObj.saleDt,
            "POS_NO": cardLogObj.posNo,
            "BILL_NO": cardLogObj.billNo,
            "TRAN_FG": "1",  # 0:전체 1:일반 / 2: 포인트충전 / 3:후결제 / 4:선결제 / 5:RF 충전
            "SEQ": cardLogObj.seq,
            "SALE_FG": cardLogObj.saleFlag,
            "CARD_AMT": cardLogObj.cardAmt,
            "CARD_NO": cardLogObj.cardNo,
            "VAN_CD": cardLogObj.vanCd,
            "CARD_CD": cardLogObj.cardCd,
            "CARD_NM": cardLogObj.cardName,
            "BUY_CARD_CD": cardLogObj.cardCd,
            "BUY_CARD_NM": cardLogObj.cardName,
            "APPR_NO": cardLogObj.apprNo,
            "APPR_DT": cardLogObj.apprDt,
            "APPR_TM": cardLogObj.apprTime,
            "APPR_FG": cardLogObj.apprFlag,
            "SIGN_YN": "N",
            "INST_FG": cardLogObj.instFlag,
            "INST_MON": cardLogObj.instMonth,
            "TERMINAL_ID": cardLogObj.terminalId,
            "REGISTER_NO": cardLogObj.registerNo,
            "RETURN_FG": cardLogObj.returnYn,
            "ORG_STOR_CD": cardLogObj.orgStoreCd,
            "ORG_SALE_DT": cardLogObj.orgSaleDt,
            "ORG_POS_NO": cardLogObj.orgPosNo,
            "ORG_BILL_NO": cardLogObj.orgBillNo,
            "ORG_SEQ": cardLogObj.orgSeq,
            "ORG_APPR_NO": cardLogObj.orgApprNo,
            "REMARK": cardLogObj.remark,
        }

        saleHeaderList.append(saleHeaderRow)
        cardLogList.append(cardLogRow)

        trData = {
            "T_SALE_H": saleHeaderList,
            "T_SALE_D": saleDetailList,
            "T_CARD_L": cardLogList
        }
        # trDataEncoded = json.dumps(trData, ensure_ascii=False)
        trData = json.dumps(trData)


        headers = {'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json'}
        request = requests.post('http://asp-test.imtsoft.me/api/outer/sale', data= trData,  verify=False, headers=headers)
        if request.status_code == 200:
            saleHeaderObj.sendYn = 'Y'
            saleHeaderObj.save()
            for saleDetailObj in saleDetailObjList:
                saleDetailObj.sendYn = 'Y'
                saleDetailObj.save()
            cardLogObj.sendYn = 'Y'
            if cardLogObj.orgSeq == '':
                cardLogObj.orgSeq = None
            cardLogObj.save()

        # data = {'url': 'http://localhost:3000/order/status'} #URL EXCHANGE LOCAL
        data = {'url': '/order/status'} #URL EXCHANGE RELATIVE
        # data = {'url': 'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:3000/order/status'} #URL EXCHANGE SERVER

        response = JsonResponse(data)

        device = FCMDevice.objects.all().first()


        return response

    except Exception as ex:
        print(ex)

@csrf_exempt
def storeLike(request):
    data = json.loads(request.body)

    user = User.objects.get(id=data['userId'])
    store = Store.objects.get(id=data['storeId'])

    like = StoreLike.objects.filter(store=store, user=user).values('id', 'likeYn')
    likeCnt = StoreLike.objects.filter(store=store, likeYn='Y').count()


    if not like:
        likeYn = 'N'
        likeId = ''
    else:
        likeYn = like[0]['likeYn']
        likeId = like[0]['id']

    returnRow = {'likeCnt': likeCnt, 'likeYn':likeYn, 'likeId':likeId}

    response = JsonResponse(returnRow)
    return response

def index(request):
    return render(request, '../client/index.html')

class ReactAppView(View):

    def get(self, request):
        try:
            with open(os.path.join(str(settings.BASE_DIR),
                                    'client',
                                    'index.html')) as file:
                return HttpResponse(file.read())

        except:
            return HttpResponse(status=501,)
