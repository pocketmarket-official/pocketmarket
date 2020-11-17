from django.shortcuts import render
from rest_framework import viewsets
from datetime import datetime
from time import gmtime, strftime

from trades.models import SaleHeader
from trades.serializer import SaleHeaderSerializer
from trades.models import SaleDetail
from trades.serializer import SaleDetailSerializer
# from trades.models import CashLog
# from trades.serializer import CashLogSerializer
from trades.models import CardLog
from trades.serializer import CardLogSerializer
# from trades.models import EtcLog
# from trades.serializer import EtcLogSerializer
# from trades.models import StandardLog
# from trades.serializer import StandardLogSerializer
from trades.models import PurchaseLog
from trades.serializer import PurchaseLogSerializer
from trades.models import SoldoutLog
from trades.serializer import SoldoutLogSerializer
from trades.models import CornerStateLog
from trades.serializer import CornerStateLogSerializer
from trades.models import Test
from trades.serializer import TestSerializer

from items.models import Item

class SaleHeaderView(viewsets.ModelViewSet):

    serializer_class = SaleHeaderSerializer
    queryset = SaleHeader.objects.all()

class SaleDetailView(viewsets.ModelViewSet):

    serializer_class = SaleDetailSerializer
    queryset = SaleDetail.objects.all()

# class CashLogView(viewsets.ModelViewSet):
#
#     serializer_class = CashLogSerializer
#     queryset = CashLog.objects.all()

class CardLogView(viewsets.ModelViewSet):

    serializer_class = CardLogSerializer
    queryset = CardLog.objects.all()
#
# class EtcLogView(viewsets.ModelViewSet):
#
#     serializer_class = EtcLogSerializer
#     queryset = EtcLog.objects.all()
#
# class StandardLogView(viewsets.ModelViewSet):
#
#     serializer_class = StandardLogSerializer
#     queryset = StandardLog.objects.all()

class PurchaseLogView(viewsets.ModelViewSet):

    serializer_class = PurchaseLogSerializer
    queryset = PurchaseLog.objects.all()

class SoldoutLogView(viewsets.ModelViewSet):

    serializer_class = SoldoutLogSerializer
    queryset = SoldoutLog.objects.all()

class CornerStateLogView(viewsets.ModelViewSet):
    serializer_class = CornerStateLogSerializer
    queryset = CornerStateLog.objects.all()


class TestView(viewsets.ModelViewSet):

    serializer_class = TestSerializer
    queryset = Test.objects.all()