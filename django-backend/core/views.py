import os
import requests
from django.db import transaction
from django.contrib.auth import login
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.shortcuts import reverse
import json
from datetime import datetime
from time import gmtime, strftime
from users.models import User
from items.models import Item
from trades.models import SaleHeader
from trades.models import SaleDetail
# from trades.models import CashLog
from trades.models import CardLog
# from trades.models import StandardLog
from trades.models import PurchaseLog
from trades.models import SoldoutLog
from trades.models import CornerStateLog


# Create your views here.


class KakaoException(Exception):
    pass


def kakao_login(request):
    ''' use kakao oauth '''
    client_id = os.environ.get("KAKAO_KEY")
    redirect_uri = "http:#13.124.90.138:8000/login/kakao/callback"
    return redirect(
        f"https:#kauth.kakao.com/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code"
    )


def kakao_callback(request):
    ''' sign in and log in with kakao '''
    try:
        code = request.GET.get("code", None)
        client_id = os.environ.get("KAKAO_KEY")
        client_secret = os.environ.get("KAKAO_SECRET")
        redirect_uri = "http:#13.124.90.138:8000/login/kakao/callback"
        if code is not None:
            # get access_token with the code
            request_api = requests.post(
                f"https:#kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_uri}&code={code}",
            )
            result_json = request_api.json()
            error = result_json.get("error", None)
            if error is not None:
                raise KakaoException()
            else:
                access_token = result_json.get("access_token")
                profile_request = requests.get(
                    "https:#kapi.kakao.com/v2/user/me",
                    headers={
                        "Authorization": f"Bearer {access_token}",
                    },
                )
                profile_json = profile_request.json()
                kakao_id = profile_json.get("id")
                if kakao_id is not None:
                    email = profile_json.get("kakao_account")["email"]
                    if email is None:
                        raise KakaoException()
                    try:
                        user = User.objects.get(email=email)
                    except:
                        user = User.objects.create(
                            email=email,
                        )
                        user.set_unusable_password()
                        user.save()
                    login(request, user)
                    return HttpResponseRedirect("http:#13.124.90.138:3000/main")
                else:
                    raise KakaoException()
    except KakaoException:
        return HttpResponseRedirect("http:#13.124.90.138:3000/login")


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
        vanCd = '11'
        # parameter from api
        storeCd = 'C0001'
        posNo = '01'
        dcAmt = 0.0

        # etc variables
        saleDt = datetime.today().strftime('%Y%m%d')
        weekday = ((datetime.today().weekday()) + 2) % 7
        if weekday == 0:
            weekday = 7
        saleTime = strftime("%H%M%S", gmtime())
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
            billNo = '00001'

        payments = [
            {
                'seq': 1,
                'type': 1,  # 1:결제/2:할인
                'method': 'card',  # pgJsonReturn _ method
                'amount': 15000,  # pgJsonReturn _ price
                'cardNo': '0001000200030004',  # pgJsonReturn _ payment_data['card_no']
                'cardName': '하나카드',  # pgJsonReturn _ payment_data['card_name']
                'apprNo': '00010002',  # pgJsonReturn _ payment_data['card_auth_no']
                'apprDt': '20101002',  # pgJsonReturn _ payment_data['p_at']
                'apprTime': '092008',  # pgJsonReturn _ payment_data['p_at']
                'terminalId': '00030004',  # pgJsonReturn _ payment_data['tid']
                'registerNo': '00050006',  # todo: 이거뭐지?
            },
            {
                'seq': 2,
                'type': 2,  # 1:결제/2:할인
                'method': 'pocketMoney',
                'amount': 2000
            }
        ]

        # keymap으로부터 넘어올 결제 목록 데이터
        items = [
            # 아메리카노 2잔
            {
                'seq': 1,
                'orderType': '1',  # 1:일반/2:세트
                'itemCd': '00001',  # 아메리카노
                'qty': 2,
                'itemSellGroup': '1',  # 세트나 옵션추가 시 한 그룹임을 명시하기 위해 부여하는 그룹코드
                'itemSellLevel': '1',  # 1:prent/2:child
                'itemSellType': '1'  # 1:일반/2:옵션변경/3:옵션추가
            },
            # 티라미스세트 1개
            {  # 티라미스 세트
                'seq': 2,
                'orderType': '2',
                'itemCd': '00002',  # 티라미스 세트
                'qty': 1,
                'itemSellGroup': '2',
                'itemSellLevel': '1',
                'itemSellType': '1'
            },
            {  # 티라미스
                'seq': 3,
                'orderType': '1',  # todo: 1?? 2?? ->1
                'itemCd': '00003',  # 티라미스
                'qty': 1,
                'itemSellGroup': '2',
                'itemSellLevel': '2',
                'itemSellType': '1'  # todo: 1?? 2??
            },
            {  # 아메리카노
                'seq': 4,
                'saleFlag': '1',
                'orderType': '1',  # todo: 1?? 2?? ->1
                'itemCd': '00001',  # 아메리카노
                'qty': -1,
                'itemSellGroup': '2',
                'itemSellLevel': '2',
                'itemSellType': '2'
            },
            {  # 라떼
                'seq': 5,
                'orderType': '2',  # todo: 1?? 2??
                'itemCd': '00004',  # 라떼
                'qty': 1,
                'itemSellGroup': '2',
                'itemSellLevel': '2',
                'itemSellType': '2'
            },
            # 아메리카노 샷추가 1잔
            {  # 아메리카노
                'seq': 6,
                'orderType': '1',
                'itemCd': '00001',  # 아메리카노
                'qty': 1,
                'itemSellGroup': '3',
                'itemSellLevel': '1',
                'itemSellType': '1'
            },
            {  # 샷추가
                'seq': 7,
                'orderType': '1',
                'itemCd': '00005',  # 샷추가
                'qty': 1,
                'itemSellGroup': '3',
                'itemSellLevel': '2',
                'itemSellType': '3'
            },
        ]

        # python manage.py shell 에서 dir 찍어가면서 확인 가능

        i = 1
        for item in items:
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
                orderType=item['orderType'],
                itemCd=item['itemCd'],
                itemName=target.itemName,
                qty=item['qty'],
                itemSellGroup=item['itemSellGroup'],
                itemSellLevel=item['itemSellLevel'],
                itemSellType=item['itemSellType'],
                saleCost=target.price,
                salePrice=target.price - dcAmt,
                orgSalePrice=target.price,
                totSaleAmt=target.price * item['qty'],
                saleAmt=(target.price * item['qty']) - dcAmt,
                supAmt=((target.price * item['qty']) - dcAmt) * 1.1,
                taxAmt=target.price - dcAmt - (((target.price * item['qty']) - dcAmt) * 1.1),
                offTaxAmt=0.0,
                taxYn="Y",
                totDcAmt=0.0,
                pointDcAmt=0.0,
                saleTime=saleTime,
                sendYn='N',
            )
            saleDetailObjList.append(saleDetailObj)

            i += 1

        i = 1
        for payment in payments:

            if payment['type'] == 1:
                headerCardAmt += payment['amount']  # 카드결제금액 더해가는 방식
                cardSeq = i
                cardCardAmt += payment['amount']
                cardCardNo = payment['cardNo']
                cardVanCd = '001'  # todo: asp에 nice pg코드 등록
                cardCardCd = '001'  # 발급사 #todo: asp cardCode와 맞추기
                cardCardName = '하나카드'  # todo: asp cardNamerhk 맞추기
                cardApprNo = payment['apprNo']
                cardApprDt = payment['apprDt']
                cardApprTime = payment['apprTime']
                cardTerminalId = payment['terminalId']
                cardRegisterNo = payment['registerNo']
            elif payment['type'] == 2:
                headerTotDcAmt += payment['amount']
                headerPointDcAmt += payment['amount']
                headerPointDcCnt += 1

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
            # user = 1
        )

        for saleDetail in saleDetailList:
            saleDetailObj = SaleDetail.objects.create(
                storeCd=storeCd,
                saleDt=saleDt,
                posNo=posNo,
                billNo=billNo,
                seq=saleDetail['SEQ'],
                saleFlag=saleFlag,
                orderType=saleDetail['ORD_TP'],
                itemCd=saleDetail['ITEM_CD'],
                itemName=saleDetail['ITEM_NM'],
                qty=saleDetail['QTY'],
                itemSellGroup=saleDetail['ITEM_SELL_GRP'],
                itemSellLevel=saleDetail['ITEM_SELL_LV'],
                itemSellType=saleDetail['ITEM_SELL_TY'],
                saleCost=saleDetail['SALE_COST'],
                salePrice=saleDetail['SALE_PRIC'],
                orgSalePrice=saleDetail['ORG_SALE_PRIC'],
                totSaleAmt=saleDetail['TOT_SALE_AMT'],
                saleAmt=saleDetail['SALE_AMT'],
                supAmt=saleDetail['SUP_AMT'],
                taxAmt=saleDetail['TAX_AMT'],
                offTaxAmt=saleDetail['OFF_TAX_AMT'],
                taxFlag=saleDetail['TAX_YN'],
                totDcAmt=saleDetail['TOT_DC_AMT'],
                pointDcAmt=saleDetail['PNT_DC_AMT'],
                saleTime=saleDetail['SALE_TM'],
                sendYn='N',
            )
            saleDetailObjList.append(saleDetailObj)

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
            "SALE_TP": '2',  # 판매 형태 [1:매장판매 / 2:선주문 / 3:DRIVE_THRU / 4: DELIVERY ]
            "ONOFF_TP": '1',  # 온라인 오프라인 형태, 온라인주문일경우 1
            "ORD_FG": '4',  # 주문형태 1:일반 / 2:콜 / 3:인터넷 / 4:모바일 / 5.kiosk
            "SALE_TM": saleTime,  # 판매시간(시간분초)
            "SALE_DAY": weekday,  # 일요일 1 부터 7까지
            "SALE_TM_CD": '01',  # 시간코드 공통코드 045번 참조 #todo: 뭔솔?
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
                "CNR_CD": '',
                "CNR_NM": '',
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
                "SALE_YN": 'Y',  # 매출포함여부
            }
            saleDetailList.append(saleDetailRow)

        if not cardLogObj.orgSeq:
            cardLogObj.orgSeq = ''

        cardLogRow = {
            "COMP_CD": compCd,
            "STOR_CD": cardLogObj.storeCd,
            "SALE_DT": cardLogObj.saleDt,
            "POS_NO": cardLogObj.posNo,
            "BILL_NO": cardLogObj.billNo,
            "TRAN_FG": '1',  # 0:전체 1:일반 / 2: 포인트충전 / 3:후결제 / 4:선결제 / 5:RF 충전
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
            "SIGN_YN": 'N',
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
            '"T_SALE_H': saleHeaderList,
            "T_SALE_D": saleDetailList,
            "T_CARD_L": cardLogList
        }
        trDataEncoded = json.dumps(trData, ensure_ascii=False)
        trDataDecoded = trDataEncoded.encode('utf8').decode()
        trUtf = trDataDecoded.encode('utf8').decode('utf8')

        request = requests.post('http://asp-test.imtsoft.me/api/outer/sale', data=trUtf)
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


    except Exception as ex:
        print(ex)
