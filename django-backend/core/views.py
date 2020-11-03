import os
import requests
from django.db import transaction
from django.contrib.auth import login
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.shortcuts import reverse
from datetime import datetime
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
    redirect_uri = "http://13.124.90.138:8000/login/kakao/callback"
    return redirect(
        f"https://kauth.kakao.com/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code"
    )


def kakao_callback(request):
    ''' sign in and log in with kakao '''
    try:
        code = request.GET.get("code", None)
        client_id = os.environ.get("KAKAO_KEY")
        client_secret = os.environ.get("KAKAO_SECRET")
        redirect_uri = "http://13.124.90.138:8000/login/kakao/callback"
        if code is not None:
            # get access_token with the code
            request_api = requests.post(
                f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_uri}&code={code}",
            )
            result_json = request_api.json()
            error = result_json.get("error", None)
            if error is not None:
                raise KakaoException()
            else:
                access_token = result_json.get("access_token")
                profile_request = requests.get(
                    "https://kapi.kakao.com/v2/user/me",
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
                    return HttpResponseRedirect("http://13.124.90.138:3000/main")
                else:
                    raise KakaoException()
    except KakaoException:
        return HttpResponseRedirect("http://13.124.90.138:3000/login")

@transaction.atomic
def trade(request):
    try:
        # parameter from api
        brandCd = '00001'
        storeCd = 'C0001'
        posNo = '01'
        dcAmt = 0.0
        saleFlag = '1'
        # etc parameters
        saleDt = datetime.today().strftime('%Y%m%d')
        billNo = SaleHeader.objects.filter(storeCd=storeCd, posNo=posNo, saleDt=saleDt).order_by('-billNo')

        ##definition for trade variables
        # saleHeader
        headerTotQty = 0
        headerTotSaleAmt = 0.0
        headerSaleAmt = 0.0
        headerSupAmt = 0.0
        headerTaxAmt = 0.0
        headerOffTaxAmt = 0.0
        headerTaxYn = 'Y'
        headerTotDcAmt = 0.0
        # headerNormDcAmt = 0.0
        headerPointDcAmt = 0.0
        # headerNormDcCnt = 0.0
        headerPointDcCnt = 0.0
        # headerCashAmt = 0.0
        headerCardAmt = 0.0
        # headerEtcAmt = 0.0
        headerKkmAmt = 0.0

        # saleDetail
        saleDetails = []
        saleDetailRow = {}

        #cardLog
        card_tranFlag = '1' #0:전체/1:일반/2:포인트충전
        cardSeq = 1
        cardCardAmt = 0.0
        cardCardNo = ''
        cardVanCd = ''
        cardCardCd = ''
        cardCardName = ''
        cardBuyCardCd = '' #todo: 이거 뭐임?
        cardBuyCardName = ''
        cardApprNo = ''
        cardApprDate = ''
        cardApprTime = ''
        cardApprFlag = '1' #1:정상승인/2:임의등록
        cardSignYn = 'N'
        cardInstFlag = '0' #0:일시불/1:
        cardInstMont = 0
        cardTerminalId = ''
        cardRegisterNo = ''
        cardReturnYn = 'N'
        # ORG_STOR_CD
        # ORG_SALE_DT
        # ORG_POS_NO
        # ORG_BILL_NO
        # ORG_SEQ
        # ORG_APPR_NO
        # REMARK
        # INS_DT
        # INS_US
        # MOD_DT
        # MOD_US


        if billNo:
            billNo = f'{int(billNo[0].billNo) + 1:05}'
        else:
            billNo = '00001'

        payments = [
            {
                'seq': 1,
                'type': 1, #1:결제/2:할인
                'method': 'card', #pgJsonReturn _ method
                'amount': 15000, #pgJsonReturn _ price
                'cardNo': '0001000200030004', #pgJsonReturn _ payment_data['card_no']
                'cardName': '하나카드', #pgJsonReturn _ payment_data['card_name']
                'apprNo': '00010002', #pgJsonReturn _ payment_data['card_auth_no']
                'apprDt': '20101002', #pgJsonReturn _ payment_data['p_at']
                'apprTime': '092008', #pgJsonReturn _ payment_data['p_at']
                'terminalId': '00030004', #pgJsonReturn _ payment_data['tid']
                'registerNo': '00050006', #todo: 이거뭐지?
            },
            {
                'seq': 2,
                'type': 2, #1:결제/2:할인
                'method': 'pocketMoney',
                'amount': 2000
            }
        ]

        # keymap으로부터 넘어올 결제 목록 데이터
        items = [
            # 아메리카노 2잔
            {
                'seq': 1,
                'orderTypeFlag': '1', #1:일반/2:세트
                'itemCd': '00001',  # 아메리카노
                'qty': 2,
                'itemSellGroup': '1', #세트나 옵션추가 시 한 그룹임을 명시하기 위해 부여하는 그룹코드
                'itemSellLevel': '1', #1:prent/2:child
                'itemSellType': '1' #1:일반/2:옵션변경/3:옵션추가
            },
            # 티라미스세트 1개
            {  # 티라미스 세트
                'seq': 2,
                'orderTypeFlag': '2',
                'itemCd': '00002',  # 티라미스 세트
                'qty': 1,
                'itemSellGroup': '2',
                'itemSellLevel': '1',
                'itemSellType': '1'
            },
            {  # 티라미스
                'seq': 3,
                'orderTypeFlag': '1',  # todo: 1?? 2?? ->1
                'itemCd': '00003',  # 티라미스
                'qty': 1,
                'itemSellGroup': '2',
                'itemSellLevel': '2',
                'itemSellType': '1'  # todo: 1?? 2??
            },
            {  # 아메리카노
                'seq': 4,
                'saleFlag': '1',
                'orderTypeFlag': '1',  # todo: 1?? 2?? ->1
                'itemCd': '00001',  # 아메리카노
                'qty': -1,
                'itemSellGroup': '2',
                'itemSellLevel': '2',
                'itemSellType': '2'
            },
            {  # 라떼
                'seq': 5,
                'orderTypeFlag': '2',  # todo: 1?? 2??
                'itemCd': '00004',  # 라떼
                'qty': 1,
                'itemSellGroup': '2',
                'itemSellLevel': '2',
                'itemSellType': '2'
            },
            # 아메리카노 샷추가 1잔
            {  # 아메리카노
                'seq': 6,
                'orderTypeFlag': '1',
                'itemCd': '00001',  # 아메리카노
                'qty': 1,
                'itemSellGroup': '3',
                'itemSellLevel': '1',
                'itemSellType': '1'
            },
            {  # 샷추가
                'seq': 7,
                'orderTypeFlag': '1',
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
            headerTotSaleAmt += target.price*item['qty']  # sum(saleprice * qty)
            headerTotQty += item['qty']
            saleDetailRow = {
                'seq': i,
                'orderTypeFlag': item['orderTypeFlag'],
                'itemCd': target.itemCd,
                'itemName': target.itemName,
                'qty': item['qty'],
                'itemSellGroup': item['itemSellGroup'],
                'itemSellLevel': item['itemSellLevel'],
                'itemSellType': item['itemSellType'],
                'saleCost': target.price,
                'salePrice': target.price - dcAmt,
                'orgSalePrice': target.price,
                'totSaleAmt': target.price * item['qty'],
                'saleAmt': (target.price * item['qty']) - dcAmt,
                'supAmt': ((target.price * item['qty']) - dcAmt)*1.1,
                'taxAmt': target.price - dcAmt - (((target.price * item['qty']) - dcAmt)*1.1),
                'offTaxAmt': 0.0,
                'taxFlag': '1',
                'totDcAmt': 0.0,
                'normDcAmt': 0.0,
                'pointDcAmt': 0.0,
                'saleTime': '090810',
            }
            saleDetails.append(saleDetailRow)

        for payment in payments:

            if payment['type'] == 1:
                # headerSaleAmt += headerTotSaleAmt- #tot에서 할인을 뺌
                headerCardAmt += payment['amount'] #카드결제금액 더해가는 방식
                cardCardAmt += payment['amount']
                cardCardNo = payment['cardNo']
                cardVanCd = '001' #todo: asp에 nice pg코드 등록
                cardCardCd = '001' #발급사 #todo: asp cardCode와 맞추기
                cardCardName = '하나카드' #todo: asp cardNamerhk 맞추기
                cardBuyCardCd = '001' #매입사 #todo: asp cardCode와 맞추기
                cardBuyCardName = '하나카드' #todo: asp cardNamerhk 맞추기
                cardApprNo = payment['apprNo']
                cardApprDate = payment['apprDt']
                cardApprTime = payment['apprTime']
                cardTerminalId = payment['terminalId']
                cardRegisterNo = payment['registerNo']
            elif payment['type'] == 2:
                headerTotDcAmt += payment['amount']
                headerPointDcAmt += payment['amount']
                headerPointDcCnt += 1

        headerSaleAmt = headerTotSaleAmt-headerTotDcAmt
        headerSupAmt = headerSaleAmt/1.1
        headerTaxAmt = headerSaleAmt - headerSupAmt
        headerOffTaxAmt = 0.0


        # saleHeader = {
        #     'headerTotQty': headerTotQty,
        #     'headerTotSaleAmt': headerTotSaleAmt,
        #     'headerSaleAmt': headerSaleAmt,
        #     'headerSupAmt': headerSupAmt,
        #     'headerTaxAmt': headerTaxAmt,
        #     'headerOffTaxAmt': headerOffTaxAmt,
        #     'headerTaxYn': headerTaxYn,
        #     'headerTotDcAmt':  headerTotDcAmt,
        #     'headerPointDcAmt': headerPointDcAmt,
        #     'headerPointDcCnt': headerPointDcCnt,
        #     'headerCardAmt': headerCardAmt,
        #     'kkmAmt': headerKkmAmt
        # }
        #print(saleHeader)

        # cardLog = {
        #     'card_tranFlag': card_tranFlag,
        #     'cardSeq': cardSeq,
        #     'cardCardAmt': cardCardAmt,
        #     'cardCardNo': cardCardNo,
        #     'cardVanCd': cardVanCd,
        #     'cardCardCd': cardCardCd,
        #     'cardCardName': cardCardName,
        #     'cardBuyCardCd': cardBuyCardCd,
        #     'cardBuyCardName': cardBuyCardName,
        #     'cardApprNo': cardApprNo,
        #     'cardApprDate': cardApprDate,
        #     'cardApprTime': cardApprTime,
        #     'cardApprFlag': cardApprFlag,
        #     'cardSignYn': cardSignYn,
        #     'cardInstFlag': cardInstFlag,
        #     'cardInstMont': cardInstMont,
        #     'cardTerminalId': cardTerminalId,
        #     'cardRegisterNo': cardRegisterNo,
        #     'cardReturnYn': cardReturnYn
        # }
        # print(cardLog)


        # print(saleDetails)


        SaleHeader.objects.create(
            storeCd = storeCd,
            saleDt = saleDt,
            posNo = posNo,
            billNo = billNo,
            saleFlag = saleFlag,
            totQty = headerTotQty,
            totSaleAmt = headerTotSaleAmt,
            saleAmt = headerSaleAmt,
            supAmt = headerSupAmt,
            taxAmt = headerTaxAmt,
            offTaxAmt = headerOffTaxAmt,
            totDcAmt = headerTotDcAmt,
            pointDcAmt = headerPointDcAmt,
            pointDcCnt = headerPointDcCnt,
            cardAmt = headerCardAmt,
            kkmAmt = headerKkmAmt
        )

        for saleDetail in saleDetails:
            SaleDetail.objects.create(
                storeCd = storeCd,
                saleDt = saleDt,
                posNo = posNo,
                billNo = billNo,
                seq = saleDetail['seq'],
                saleFlag = saleFlag,
                orderTypeFlag = saleDetail['orderTypeFlag'],
                itemCd = saleDetail['itemCd'],
                itemName = saleDetail['itemName'],
                qty = saleDetail['qty'],
                itemSellGroup = saleDetail['itemSellGroup'],
                itemSellLevel = saleDetail['itemSellLevel'],
                itemSellType = saleDetail['itemSellType'],
                saleCost = saleDetail['saleCost'],
                salePrice = saleDetail['salePrice'],
                totSaleAmt = saleDetail['totSaleAmt'],
                saleAmt = saleDetail['saleAmt'],
                supAmt = saleDetail['supAmt'],
                taxAmt = saleDetail['taxAmt'],
                offTaxAmt = saleDetail['offTaxAmt'],
                taxFlag = saleDetail['taxFlag'],
                totDcAmt = saleDetail['totDcAmt'],
                pointDcAmt = saleDetail['pointDcAmt'],
                saleTime = saleDetail['saleTime']
            )

        CardLog.objects.create(
            storeCd = storeCd,
            saleDt = saleDt,
            posNo = posNo,
            billNo = billNo,
            seq = cardSeq,
            saleFlag = saleFlag,
            cardAmt = cardCardAmt,
            cardNo = cardCardNo,
            vanCd = cardVanCd,
            cardCd = cardCardCd,
            cardName = cardCardName,
            buyCardCd = cardBuyCardCd,
            buyCardName = cardBuyCardName,
            apprNo = cardApprNo,
            apprDate = cardApprDate,
            apprTime = cardApprTime,
            apprFlag = cardApprFlag,
            instMonth = cardInstMont,
            terminalId = cardTerminalId,
            registerNo = cardRegisterNo,
            returnYn = cardReturnYn
        )


    except Exception as ex:
        print(ex)
