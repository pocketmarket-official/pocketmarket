import os
import requests
from django.contrib.auth import login
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.shortcuts import reverse
from datetime import datetime
from users.models import User
from items.models import Item
from trades.models import SaleHeader
from trades.models import SaleDetail
from trades.models import CashLog
from trades.models import CardLog
from trades.models import StandardLog
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


def trade(request):
    ##definition for trade variables
    # sale_header
    sale_header = []
    header_tot_qty = 0
    header_tot_sale_amt = 0.0
    header_tot_sale_amt = 0.0
    header_sup_amt = 0.0
    header_tax_amt = 0.0
    header_off_tax_amt = 0.0
    header_tot_dc_amt = 0.0
    header_norm_dc_amt = 0.0
    header_pnt_dc_amt = 0.0
    header_norm_dc_cnt = 0.0
    header_pnt_dc_cnt = 0.0
    header_cash_amt = 0.0
    header_card_amt = 0.0
    header_etc_amt = 0.0
    # sale_detail
    sale_detail = []
    sale_detail_row = {}
    detail_seq = 0
    detail_order_type = ''
    detail_item_cd = ''
    detail_item_name = ''
    detail_qty = 0
    detail_item_sell_group = ''
    detail_item_sell_level = ''
    detail_item_sell_type = ''
    detail_sale_cost = 0.0
    detail_sale_pric = 0.0
    detail_org_sale_pric = 0.0
    detail_tot_sale_amt = 0.0
    detail_sale_amt = 0.0
    detail_sup_amt = 0.0
    detail_tax_amt = 0.0
    detail_off_tax_amt = 0.0
    detail_tax_yn = 'N'
    detail_tot_dc_amt = 0.0
    detail_norm_dc_amt = 0.0
    detail_pnt_dc_amt = 0.0
    detail_sale_tm = '000000'

    # parameter from api
    brandCd = '00001'
    storeCd = 'C0001'
    posNo = '01'
    dcAmt = 0.0
    # etc parameters
    saleDt = datetime.today().strftime('%Y%m%d')
    billNo = SaleHeader.objects.filter(storeCd=storeCd, posNo=posNo, saleDt=saleDt).order_by('-billNo')[0]
    if billNo:
        billNo = f'{int(billNo) + 1:05}'
    else:
        billNo = '00001'


    # keymap으로부터 넘어올 결제 목록 데이터
    items = [
        # 아메리카노 2잔
        {
            'seq': 1,
            'saleFlag': '1',
            'ordType': '1',
            'itemCd': '00001',  # 아메리카노
            'qty': 2,
            'itemSellGroup': '1',
            'itemSellLevel': '1',
            'itemSellType': '1'
        },
        # 티라미스세트 1개
        {  # 티라미스 세트
            'seq': 2,
            'saleFlag': '1',
            'ordType': '2',
            'itemCd': '00002',  # 티라미스 세트
            'qty': 1,
            'itemSellGroup': '2',
            'itemSellLevel': '1',
            'itemSellType': '1'
        },
        {  # 티라미스
            'seq': 3,
            'saleFlag': '1',
            'ordType': '2',  # 1?? 2??
            'itemCd': '00003',  # 티라미스
            'qty': 1,
            'itemSellGroup': '2',
            'itemSellLevel': '2',
            'itemSellType': '1'  # 1?? 2??
        },
        {  # 아메리카노
            'seq': 4,
            'saleFlag': '1',
            'ordType': '2',  # 1?? 2??
            'itemCd': '00001',  # 아메리카노
            'qty': -1,
            'itemSellGroup': '2',
            'itemSellLevel': '2',
            'itemSellType': '2'
        },
        {  # 라떼
            'seq': 5,
            'saleFlag': '1',
            'ordType': '2',  # 1?? 2??
            'itemCd': '00004',  # 라떼
            'qty': 1,
            'itemSellGroup': '2',
            'itemSellLevel': '2',
            'itemSellType': '2'
        },
        # 아메리카노 샷추가 1잔
        {  # 아메리카노
            'seq': 6,
            'saleFlag': '1',
            'ordType': '1',
            'itemCd': '00001',  # 아메리카노
            'qty': 1,
            'itemSellGroup': '3',
            'itemSellLevel': '1',
            'itemSellType': '1'
        },
        {  # 샷추가
            'seq': 7,
            'saleFlag': '1',
            'ordType': '1',
            'itemCd': '00005',  # 샷추가
            'qty': 1,
            'itemSellGroup': '3',
            'itemSellLevel': '2',
            'itemSellType': '3'
        },
    ]

    # python manage.py shell 에서 dir 찍어가면서 확인 가능
    # for 문 돌린 각각에 대해서 Item에서 itemCd로 filter한 후에 
    # 그 item의 가격과 수량 곱해서 price에 더함
    # 결과는 총 가격 합계
    i = 1
    for item in items:
        target = Item.objects.get(itemCd=item['itemCd'])
        sale_detail_row = {
            'seq': i,
            'itemCd': target.itemCd,
            'itemName': target.itemName,
            'qty': item['qty'],
            'itemSellGroup': item['itemSellGroup'],
            'itemSellLeve': item['itemSellLeve'],
            'itemSellType': item['itemSellType'],
            'saleCost': target.price,
            'salePrice': target.price - dcAmt,
            'org_sale_pric': target.price,
            'tot_sale_amt': target.price * item['qty'],
            'sale_amt': (target.price * item['qty']) - dcAmt,
            'sup_amt': ((target.price * item['qty']) - dcAmt)*1.1,
            'tax_amt': target.price - dcAmt - (((target.price * item['qty']) - dcAmt)*1.1),
            'off_tax_amt': 0.0,
            'tax_yn': 'Y',
            'tot_dc_amt': 0.0,
            'norm_dc_amt': 0.0,
            'pnt_dc_amt': 0.0,
            'sale_tm': '090810',
        }
        sale_detail.push(sale_detail_row)
