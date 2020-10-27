from django.shortcuts import render
from rest_framework import viewsets
from datetime import datetime
from time import gmtime, strftime
from drf_multiple_model.views import FlatMultipleModelAPIView

from trades.models import SaleHeader
from trades.serializer import SaleHeaderSerializer
from trades.models import SaleDetail
from trades.serializer import SaleDetailSerializer
from trades.models import CashLog
from trades.serializer import CashLogSerializer
from trades.models import CardLog
from trades.serializer import CardLogSerializer
from trades.models import EtcLog
from trades.serializer import EtcLogSerializer
from trades.models import StandardLog
from trades.serializer import StandardLogSerializer
from trades.models import PurchaseLog
from trades.serializer import PurchaseLogSerializer
from trades.models import SoldoutLog
from trades.serializer import SoldoutLogSerializer
from trades.models import CornerStateLog
from trades.serializer import CornerStateLogSerializer

from items.models import Item

class SaleHeaderView(viewsets.ModelViewSet):

    serializer_class = SaleHeaderSerializer
    queryset = SaleHeader.objects.all()

class SaleDetailView(viewsets.ModelViewSet):

    serializer_class = SaleDetailSerializer
    queryset = SaleDetail.objects.all()

class CashLogView(viewsets.ModelViewSet):

    serializer_class = CashLogSerializer
    queryset = CashLog.objects.all()

class CardLogView(viewsets.ModelViewSet):

    serializer_class = CardLogSerializer
    queryset = CardLog.objects.all()

class EtcLogView(viewsets.ModelViewSet):

    serializer_class = EtcLogSerializer
    queryset = EtcLog.objects.all()

class StandardLogView(viewsets.ModelViewSet):

    serializer_class = StandardLogSerializer
    queryset = StandardLog.objects.all()

class PurchaseLogView(viewsets.ModelViewSet):

    serializer_class = PurchaseLogSerializer
    queryset = PurchaseLog.objects.all()

class SoldoutLogView(viewsets.ModelViewSet):

    serializer_class = SoldoutLogSerializer
    queryset = SoldoutLog.objects.all()

class CornerStateLogView(viewsets.ModelViewSet):
    serializer_class = CornerStateLogSerializer
    queryset = CornerStateLog.objects.all()
#
# class TradeMakerView(FlatMultipleModelAPIView):
#     queryList = [
#         {'queryset': SaleHeader.objects.all(), 'serializer_class':SaleHeaderSerializer},
#         {'queryset': SaleDetail.objects.all(), 'serializer_class': SaleDetail},
#         {'queryset': CashLog.objects.all(), 'serializer_class': CashLogSerializer},
#         {'queryset': CardLog.objects.all(), 'serializer_class': CardLogSerializer}
#     ]

def Trademakerview(request):
    try:
        ##definition for trade variables
        # sale_header
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
        # etc parameters
        saleDt = datetime.today().strftime('%Y%m%d')
        billNo = SaleHeader.objects.filter(storeCd=storeCd, posNo=posNo, saleDt=saleDt).order_by('-billNo')[0]
        if billNo:
            billNo = f'{int(billNo) + 1:05}'
        else:
            billNo = '00001'
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

        for item in items:
            Item.objects.get(itemCd=item.itemCd)
    except Exception as ex:
        print(ex)