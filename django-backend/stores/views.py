from django.shortcuts import render
from rest_framework import viewsets
from stores.serializer import StoreSerializer
from stores.models import Store
from stores.serializer import FunSetSerializer
from stores.models import FunSet
from stores.serializer import PosSerializer
from stores.models import Pos


class StoreView(viewsets.ModelViewSet):

    serializer_class = StoreSerializer
    queryset = Store.objects.all()

class FunSetView(viewsets.ModelViewSet):

    serializer_class = FunSetSerializer
    queryset = FunSet.objects.all()

class PosView(viewsets.ModelViewSet):

    serializer_class = PosSerializer
    queryset = Pos.objects.all()
