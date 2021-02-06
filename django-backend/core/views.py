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
from trades.models import ErrorLog
from stores.models import StoreLike
from stores.models import Store
from time import localtime
from time import strftime
from users.models import User
from lib.BootpayApi import BootpayApi
from fcm_django.models import FCMDevice
import firebase_admin
from firebase_admin import credentials
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


class KakaoException(Exception):

    pass


def kakao_callback(request):
    ''' sign in and log in with kakao '''
    try:
        code = request.GET.get('code', None)
        client_id = os.environ.get('KAKAO_KEY')
        client_secret = os.environ.get('KAKAO_SECRET')
        STATE = os.environ.get("STATE")
        DOMAIN = os.environ.get("DOMAIN")

        if STATE == 'local':
            redirect_uri = 'http://localhost:8000/login/kakao/callback/'
        elif STATE == 'dev':
            redirect_uri = 'http://13.124.90.138:8000/login/kakao/callback/'
        elif STATE == 'production':
            redirect_uri = DOMAIN+'/login/kakao/callback/'
        elif STATE == 'jh':
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


                    if STATE == 'local':
                        url = f'/makingCookie/{access_token}/{email}'
                    elif STATE == 'dev':
                        url = f'http://13.124.90.138:3000/makingCookie/{access_token}/{email}'
                    elif STATE == 'production':
                        url = f'/makingCookie/{access_token}/{email}'
                    elif STATE == 'jh':
                        url = f'http://13.124.90.138:3000/makingCookie/{access_token}/{email}'

                    return HttpResponseRedirect(url)
                else:
                    raise KakaoException()
    except KakaoException:
        if STATE == 'local':
            url = '/login/'
        elif STATE == 'dev':
            url = 'http://13.124.90.138:8000/login/'
        elif STATE == 'production':
            url = '/login/'
        elif STATE == 'dev':
            url = 'http://13.124.90.138:8000/login/'

        return HttpResponseRedirect(url)


@csrf_exempt
def saveToken(request):
    try:
        # variable for error response
        context = ''
        tradeErrorCode = '200'
        tradeErrorMsg = ''
        userId = ''

        tradeErrorCode = '201'
        tradeErrorMsg = "request user_email doesn't exist"
        user_email = json.loads(request.body)['user_email']

        tradeErrorCode = '202'
        tradeErrorMsg = "request token doesn't exist"
        token = json.loads(request.body)['fcmToken']

        tradeErrorCode = '203'
        tradeErrorMsg = "user object doesn't exist"
        user = User.objects.get(email=user_email)

        tradeErrorCode = '204'
        tradeErrorMsg = "user ios token get_or_create failed"
        context = 'token=' + token + ' user=' + str(user.id)
        iosToken, flag = FCMDevice.objects.get_or_create(registration_id=token,
                                                        defaults={
                                                            'user': user,
                                                            'registration_id': token
                                                        })
        user.iosToken = iosToken.registration_id

        tradeErrorCode = '205'
        tradeErrorMsg = "user ios token update failed"
        context = 'fcmToken='+str(iosToken.id) + ' token=' + iosToken.registration_id + ' user=' + str(user.id)
        user.save()

        return HttpResponse('200')

    except Exception as ex:
        print(ex)
        ErrorLog.objects.create(storeId='', saleDt='', posNo='',
                                billNo='', userId=userId, itemId='',
                                tradeErrorCode=tradeErrorCode, tradeErrorMsg=tradeErrorMsg,
                                exception=str(ex), context=context)

@csrf_exempt
#TODO : Error moudle 따로 빼아함
def saveTokenStore(request):
    try:
        # variable for error response
        context = ''
        tradeErrorCode = '300'
        tradeErrorMsg = ''
        userId=''
        storeCd=''

        tradeErrorCode = '301'
        tradeErrorMsg = "request storeCd doesn't exist"
        storeCd = json.loads(request.body)['storeCd']

        tradeErrorCode = '302'
        tradeErrorMsg = "request fcmToken doesn't exist"
        token = json.loads(request.body)['fcmToken']

        tradeErrorCode = '303'
        tradeErrorMsg = "request userId doesn't exist"
        userId = json.loads(request.body)['userId']

        tradeErrorCode = '304'
        tradeErrorMsg = "user object doesn't exist"
        user = User.objects.get(id=userId)

        tradeErrorCode = '305'
        tradeErrorMsg = "store object doesn't exist"
        store = Store.objects.get(storeCd=storeCd)

        tradeErrorCode = '306'
        tradeErrorMsg = "store ios token get_or_create failed"
        context = 'token='+token+' user='+str(user.id)
        iosToken, flag = FCMDevice.objects.get_or_create(registration_id=token,
                                                        defaults={
                                                            'user': user,
                                                            'registration_id': token
                                                        })
        store.iosToken = iosToken.registration_id

        tradeErrorCode = '307'
        tradeErrorMsg = "store ios token update failed"
        context = 'fcmToken='+str(iosToken.id) + 'token=' + iosToken.registration_id + ' store=' + str(store.id)
        store.save()

        return HttpResponse('success')

    except Exception as ex:
        print(ex)
        ErrorLog.objects.create(storeId=storeCd, saleDt='', posNo='',
                                billNo='', userId=userId, itemId='',
                                tradeErrorCode=tradeErrorCode, tradeErrorMsg=tradeErrorMsg,
                                exception=str(ex), context=context)


@csrf_exempt
def trade(request):
    try:
        # variable defintion
        saleHeaderList = []
        saleDetailList = []
        cardLogList = []
        saleDetailObjList = []
        # variable for error response
        context = ''
        tradeErrorCode = '000'
        tradeErrorMsg = ''
        # variable for ErrorLog
        storeId = ''
        saleDt = ''
        posNo = ''
        billNo = ''
        userId = ''
        itemId = ''
        # variable for cancelation
        bootpay = BootpayApi(
            os.environ.get("BOOTPAY_WEB_APPLICATION_ID"),
            os.environ.get("BOOTPAY_PRIVATE_KEY")
        )

        STATE = os.environ.get("STATE")
        if STATE == 'local':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'
        elif STATE == 'dev':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'
        elif STATE == 'production':
            domain = 'https://asp.imtsoft.me/api/'
            compCd = 'C0023'
        elif STATE == 'jh':
            domain = 'http://asp.imtsoft.me/api/'
            compCd = 'C0023'

        # constant

        terminalId = 'pocmaket1m'
        vanCd = '11'

        # parameter from request
        tradeErrorCode = '010'
        tradeErrorMsg = "requestBody doesn't exist"
        requestBody = request.body

        tradeErrorCode = '011'
        tradeErrorMsg = "requestBody json load failure"
        requestBodyJson = json.loads(requestBody)

        tradeErrorCode = '012'
        tradeErrorMsg = "requestBody userId doesn't exist"
        userId = requestBodyJson['userId']

        tradeErrorCode = '013'
        tradeErrorMsg = "requestBody storeId doesn't exist"
        storeId = requestBodyJson['storeId']

        tradeErrorCode = '014'
        tradeErrorMsg = "requestBody sellItemList doesn't exist"
        sellItemList = requestBodyJson['sellItemList']

        tradeErrorCode = '015'
        tradeErrorMsg = "requestBody data(payment) doesn't exist"
        payment = requestBodyJson['data']

        tradeErrorCode = '020'
        tradeErrorMsg = "user object doesn't exist"
        context = 'userId = ' + str(userId)
        user = User.objects.get(id=userId)

        tradeErrorCode = '021'
        tradeErrorMsg = "store object doesn't exist"
        context = 'storeId = ' + str(storeId)
        store = Store.objects.get(id=storeId)

        if store.openYn == 'N':
            # bootpay accesstoken 받아오기
            bootpayAceessToken = bootpay.get_access_token()
            # bootpay accesstoken의 상태를 확인하고
            if bootpayAceessToken['status'] == 200:
                # bootpay에 취소 요청을 날린다.
                cancel_result = bootpay.cancel(payment['receipt_id'],
                                               payment['price'],
                                               user.email,
                                               store.storeName + ' 매장이 마감되었음')
                # 취소 되었다면
                if cancel_result['status'] == 200:
                    data = {'url': '/order/status',
                            'result': '202',
                            'context': '주문이 접수되지 않았습니다. 주문하시는 동안에 가게가 마감해버렸나봐요 ㅜㅜ'}
                    response = JsonResponse(data)
                    return response

        storeCd = store.storeCd
        storeName = store.storeName

        posNo = '01'
        dcAmt = 0.0

        # etc variables
        saleDt = datetime.today().strftime('%Y%m%d')
        weekday = ((datetime.today().weekday()) + 2) % 7
        if weekday == 0:
            weekday = 7
        saleTime = strftime('%H%M%S', localtime())
        saleTimeCd = ''
        if saleTime < '050000':
            saleTimeCd = '06'
        elif saleTime < '100000':
            saleTimeCd = '01'
        elif saleTime < '130000':
            saleTimeCd = '02'
        elif saleTime < '160000':
            saleTimeCd = '03'
        elif saleTime < '190000':
            saleTimeCd = '04'
        elif saleTime < '230000':
            saleTimeCd = '05'

        saleFlag = '1'
        mealCd = '9'
        mealName = '기타'
        billNo = SaleHeader.objects.filter(storeCd=storeCd, posNo=posNo, saleDt=saleDt).order_by('-billNo')
        if billNo:
            if billNo[0].billNo > '9999':
                data = {'url': '/order/status',
                        'result': '500',
                        'tradeErrorCode': '030',
                        'tradeErrorMsg': "order overflow",
                        'context': context}
                response = JsonResponse(data)
                return response
            else:
                billNo = f'{int(billNo[0].billNo) + 1:04}'
        else:
            billNo = '0001'

        # definition for trade variables
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

        i = 1
        if payment['method'] == 'card':
            headerCardAmt += payment['price']  # 카드결제금액 더해가는 방식
            cardSeq = i
            cardCardAmt += payment['price']
            cardCardNo = payment['card_no']
            cardVanCd = vanCd
            cardCardCd = payment['card_code']
            cardCardName = payment['card_name']
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
            i += 1

        with transaction.atomic():
            i = 1
            detailSupAmt = 0
            detailTaxAmt = 0
            for item in sellItemList:
                tradeErrorCode = '022'
                tradeErrorMsg = "target object doesn't exist"
                context = 'itemCd = '+str(item['itemCd'])
                target = Item.objects.get(itemCd=item['itemCd'])
                itemId = target.id
                # 해당 제품이 품절되었으면
                if target.remainCount == 0:
                    # bootpay accesstoken 받아오기
                    bootpayAcceessToken = bootpay.get_access_token()
                    #bootpay accesstoken의 상태를 확인하고
                    if bootpayAcceessToken['status'] == 200:
                        #bootpay에 취소 요청을 날린다.
                        cancel_result = bootpay.cancel(payment['receipt_id'],
                                                       payment['price'],
                                                       user.email,
                                                       store.storeName+'의 '+target.itemName+' 제품이 품절되었음.')
                        # 취소 되었다면
                        if cancel_result['status'] == 200:
                            data = {'url': '/order/status',
                                    'result': '202',
                                    'context': '주문이 접수되지 않았습니다.'
                                               + target.itemName
                                               + '품목이 주문하시는 동안 다 떨어졌나봐요 ㅜㅜ'}
                            response = JsonResponse(data)
                            return response

                headerTotSaleAmt += target.price * item['qty']  # sum(saleprice * qty)
                headerTotQty += item['qty']
                supAmt = round(((target.price * item['qty']) - dcAmt) / 1.1) #saleAmt*1.1
                taxAmt = round(((target.price * item['qty']) - dcAmt) - (((target.price * item['qty']) - dcAmt) / 1.1)) #saleAmt-supAmt
                #할당하고 난 결과물이 tuple로 나옴. 첫번째 인자만 다시 받아와야 함
                supAmt = supAmt
                taxAmt = taxAmt
                detailSupAmt += supAmt
                detailTaxAmt += taxAmt
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
                    supAmt=supAmt,
                    taxAmt=taxAmt,
                    offTaxAmt=0.0,
                    taxYn='Y',
                    totDcAmt=0.0,
                    pointDcAmt=0.0,
                    saleTime=saleTime,
                    sendYn='N',
                )
                saleDetailObjList.append(saleDetailObj)

                i += 1

            headerSaleAmt = headerTotSaleAmt - headerTotDcAmt
            headerSupAmt = round(headerSaleAmt / 1.1)
            headerTaxAmt = headerSaleAmt - headerSupAmt
            headerOffTaxAmt = 0.0

            #detail 공급가액 합계와 header 공급가액이 다르면
            if(detailSupAmt != headerSupAmt):
                #다르긴 한데 10원 미만으로 차이나면 header 공급가액을 detail 공급가액의 합계로 바꾸고
                if(abs(detailSupAmt - headerSupAmt)<10):
                    headerSupAmt = detailSupAmt
                #10원 이상 차이나면 에러
                else:
                    ErrorLog.objects.create(storeId=storeId, saleDt=saleDt, posNo=posNo,
                                            billNo=billNo, userId=userId, itemId=itemId,
                                            tradeErrorCode='040', tradeErrorMsg="detailSupAmt and headerSupAmt doesn't matched",
                                            exception='',
                                            context='storeCd=' + storeCd
                                                   + ' saleDt=' + saleDt
                                                   + ' posNo=' + posNo
                                                   + ' billNo=' + billNo
                                                   + ' headerSupAmt=' + str(headerSupAmt)
                                                   + ' detailSupAmt=' + str(detailSupAmt))


            # detail 부가세액 합계와 header 부가세액이 다르면
            if (detailTaxAmt != headerTaxAmt):
                # 다르긴 한데 10원 미만으로 차이나면 header 부가세액을 detail 부가세액의 합계로 바꾸고
                if (abs(detailTaxAmt - headerTaxAmt) < 10):
                    headerTaxAmt = detailTaxAmt
                # 10원 이상 차이나면 에러
                else:
                    ErrorLog.objects.create(storeId=storeId, saleDt=saleDt, posNo=posNo,
                                            billNo=billNo, userId=userId, itemId=itemId,
                                            tradeErrorCode='041',
                                            tradeErrorMsg="detailTaxAmt and headerTaxAmt doesn't matched",
                                            exception='',
                                            context='storeCd=' + storeCd
                                                    + ' saleDt=' + saleDt
                                                    + ' posNo=' + posNo
                                                    + ' billNo=' + billNo
                                                    + ' headerSupAmt=' + str(headerTaxAmt)
                                                    + ' detailSupAmt=' + str(detailTaxAmt))

            saleHeaderObj = SaleHeader.objects.create(
                storeCd=storeCd,
                saleDt=saleDt,
                posNo=posNo,
                billNo=billNo,
                saleFlag=saleFlag,
                saleDay=weekday,
                saleTime=saleTime,
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
                orderStatus='1',
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
                receiptId=payment['receipt_id'],
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
            "SALE_TM_CD": saleTimeCd,  # 시간코드 공통코드 045번 참조
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
        trData = json.dumps(trData)

        headers = {'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json'}
        request = requests.post(domain+'outer/sale', data= trData,  verify=False, headers=headers)
        if json.loads(request.text)['status'] == 0:
            saleHeaderObj.sendYn = 'Y'
            saleHeaderObj.save()
            for saleDetailObj in saleDetailObjList:
                saleDetailObj.sendYn = 'Y'
                saleDetailObj.save()
            cardLogObj.sendYn = 'Y'
            if cardLogObj.orgSeq == '':
                cardLogObj.orgSeq = None
            cardLogObj.save()
        else :
            tradeErrorCode  = '031'
            tradeErrorMsg = str(json.loads(request.text)['message'])
            context = 'storeCd=' + storeCd\
                      + ' saleDt=' + saleDt\
                      + ' posNo=' + posNo\
                      + ' billNo=' + billNo
            ErrorLog.objects.create(storeId=storeId, saleDt=saleDt, posNo=posNo,
                                    billNo=billNo, userId=userId, itemId=itemId,
                                    tradeErrorCode=tradeErrorCode, tradeErrorMsg=tradeErrorMsg,
                                    exception='', context=context)

        data = {'url': '/order/status', 'result':'200'}


        # cred = credentials.Certificate("../../pocket-market-ddc08-firebase-adminsdk-nlmru-0985fb13eb.json")
        # firebase_admin.initialize_app(cred)
        # device = FCMDevice.objects.all().first()
        if(store.iosToken):
            device = FCMDevice.objects.filter(registration_id=store.iosToken).first()
            if (device):
                device.send_message("주문수신", storeName + '에 주문이 수신되었습니다.')

        response = JsonResponse(data)
        return response

    except Exception as ex:
        print(ex)
        ErrorLog.objects.create(storeId=storeId,saleDt=saleDt,posNo=posNo,
                                billNo=billNo, userId=userId, itemId=itemId,
                                tradeErrorCode=tradeErrorCode, tradeErrorMsg=tradeErrorMsg,
                                exception=str(ex), context=context)


        data = {'url': '/order/status',
                'result': '500',
                'context':context,
                'tradeErrorCode': tradeErrorCode,
                'tradeErrorMsg': tradeErrorMsg}
        response = JsonResponse(data)
        return response

@csrf_exempt
def tradeRefund(request):
    try:
        # variable defintion
        saleHeaderList = []
        saleDetailList = []
        cardLogList = []
        saleDetailObjList = []
        # variable for error response
        context = ''
        tradeErrorCode = '100'
        tradeErrorMsg = ''
        # variable for ErrorLog
        storeId = ''
        saleDt = ''
        posNo = ''
        billNo = ''
        userId = ''
        itemId = ''
        # variable for cancelation
        bootpay = BootpayApi(
            os.environ.get("BOOTPAY_WEB_APPLICATION_ID"),
            os.environ.get("BOOTPAY_PRIVATE_KEY")
        )

        STATE = os.environ.get("STATE")
        if STATE == 'local':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'
        elif STATE == 'dev':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'
        elif STATE == 'production':
            domain = 'https://asp.imtsoft.me/api/'
            compCd = 'C0023'
        elif STATE == 'jh':
            domain = 'http://asp.imtsoft.me/api/'
            compCd = 'C0023'

        bootpayAcceessToken = bootpay.get_access_token()
        # bootpay accesstoken의 상태를 확인하고
        if bootpayAcceessToken['status'] == 200:
            # bootpay에 취소 요청을 날린다.
            cancel_result = bootpay.cancel('601eb4855b2948003baf7897',
                                           6000,
                                           'slop1434@korea.ac.kr',
                                           '테스트결제123')

        response = JsonResponse('refund success')
        return response

    except Exception as ex:
        print(ex)
        ErrorLog.objects.create(storeId=storeId,saleDt=saleDt,posNo=posNo,
                                billNo=billNo, userId=userId, itemId=itemId,
                                tradeErrorCode=tradeErrorCode, tradeErrorMsg=tradeErrorMsg,
                                exception=str(ex), context=context)


        data = {'url': '/order/status',
                'result': '500',
                'context':context,
                'tradeErrorCode': tradeErrorCode,
                'tradeErrorMsg': tradeErrorMsg}
        response = JsonResponse(data)
        return response


@csrf_exempt
def tradeReSend(request):
    try:
        compCd = '00000'
        mealCd = '9'
        mealName = '기타'

        STATE = os.environ.get("STATE")
        if STATE == 'local':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'
        elif STATE == 'dev':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'
        elif STATE == 'production':
            domain = 'https://asp.imtsoft.me/api/'
            compCd = 'C0023'
        elif STATE == 'jh':
            domain = 'https://asp.imtsoft.me/api/'
            compCd = 'C0023'

        saleHeaderList = SaleHeader.objects.filter(sendYn='N')
        for saleHeaderObj in saleHeaderList:
            storeCd = saleHeaderObj.storeCd
            saleDt = saleHeaderObj.saleDt
            posNo = saleHeaderObj.posNo
            billNo = saleHeaderObj.billNo

            saleTime = saleHeaderObj.saleTime
            saleTimeCd = ''
            if saleTime < '050000':
                saleTimeCd = '06'
            elif saleTime < '100000':
                saleTimeCd = '01'
            elif saleTime < '130000':
                saleTimeCd = '02'
            elif saleTime < '160000':
                saleTimeCd = '03'
            elif saleTime < '190000':
                saleTimeCd = '04'
            elif saleTime < '230000':
                saleTimeCd = '05'

            saleHeaderList = []
            saleHeaderObjRow = {
                "COMP_CD": compCd,
                "STOR_CD": saleHeaderObj.storeCd,
                "SALE_DT": saleHeaderObj.saleDt,
                "POS_NO": saleHeaderObj.posNo,
                "BILL_NO": saleHeaderObj.billNo,
                "SALE_TP": "2",  # 판매 형태 [1:매장판매 / 2:선주문 / 3:DRIVE_THRU / 4: DELIVERY ]
                "ONOFF_TP": "1",  # 온라인 오프라인 형태, 온라인주문일경우 1
                "ORD_FG": "4",  # 주문형태 1:일반 / 2:콜 / 3:인터넷 / 4:모바일 / 5.kiosk
                "SALE_TM": saleHeaderObj.saleTime,  # 판매시간(시간분초)
                "SALE_DAY": saleHeaderObj.saleDay,  # 일요일 1 부터 7까지
                "SALE_TM_CD": saleTimeCd,
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
            saleHeaderList.append(saleHeaderObjRow)

            saleDetailList = []
            saleDetails = SaleDetail.objects.filter(storeCd=storeCd, saleDt=saleDt, posNo=posNo, billNo=billNo)
            for saleDetailObj in saleDetails:
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

                cardLogList = []
                cardLogs = CardLog.objects.filter(storeCd=storeCd, saleDt=saleDt, posNo=posNo, billNo=billNo)

                for cardLogObj in cardLogs:
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

                cardLogList.append(cardLogRow)

            trData = {
                "T_SALE_H": saleHeaderList,
                "T_SALE_D": saleDetailList,
                "T_CARD_L": cardLogList
            }
            trData = json.dumps(trData)

            headers = {'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json'}
            request = requests.post(domain + 'outer/sale', data=trData, verify=False, headers=headers)
            if json.loads(request.text)['status'] == 0:
                saleHeaderObj.sendYn = 'Y'
                saleHeaderObj.save()
                for saleDetailObj in saleDetails:
                    saleDetailObj.sendYn = 'Y'
                    saleDetailObj.save()
                for cardLogObj in cardLogs:
                    cardLogObj.sendYn = 'Y'
                    cardLogObj.save()
                    cardLogObj.save()

        return HttpResponse('재송신 성공')

    except Exception as ex:
        print(ex)
        return HttpResponse('재송신 실패')


@csrf_exempt
def pushSend_makeComplete(request):
    try:
        storeName = json.loads(request.body)['storeName']
        user = User.objects.get(id=json.loads(request.body)['userId'])
        device = FCMDevice.objects.filter(registration_id=user.iosToken).first()
        if(device):
            device.send_message("상품준비완료", storeName + '에 주문하신 상품이 준비되었습니다.')

        return HttpResponse('success')
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
