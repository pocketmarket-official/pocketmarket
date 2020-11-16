from django.shortcuts import render
from rest_framework import viewsets
from stores.serializer import StoreSerializer
from stores.models import Store
from stores.serializer import FunsetSerializer
from stores.models import Funset
from stores.serializer import PosSerializer
from stores.models import Pos
from stores.serializer import StoreDicSerializer
from stores.models import StoreDic
from stores.serializer import StoreLikeSerializer
from stores.models import StoreLike



class StoreView(viewsets.ModelViewSet):

    serializer_class = StoreSerializer
    queryset = Store.objects.all()

class FunsetView(viewsets.ModelViewSet):

    serializer_class = FunsetSerializer
    queryset = Funset.objects.all()

class PosView(viewsets.ModelViewSet):

    serializer_class = PosSerializer
    queryset = Pos.objects.all()

class StoreDicView(viewsets.ModelViewSet):

    serializer_class = StoreDicSerializer
    queryset = StoreDic.objects.all()

class StoreLikeView(viewsets.ModelViewSet):

    serializer_class = StoreLikeSerializer
    queryset = StoreLike.objects.all()
