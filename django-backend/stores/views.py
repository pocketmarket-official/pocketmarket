from django.shortcuts import render
from rest_framework import viewsets
from stores.serializer import StoreSerializer
from stores.models import Store
from stores.serializer import FunsetSerializer
from stores.models import Funset
from stores.serializer import PosSerializer
from stores.models import Pos


class StoreView(viewsets.ModelViewSet):

    serializer_class = StoreSerializer
    queryset = Store.objects.all()

class FunsetView(viewsets.ModelViewSet):

    serializer_class = FunsetSerializer
    queryset = Funset.objects.all()

class PosView(viewsets.ModelViewSet):

    serializer_class = PosSerializer
    queryset = Pos.objects.all()
