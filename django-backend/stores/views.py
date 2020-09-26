from django.shortcuts import render
from rest_framework import viewsets
from stores.serializer import StoreSerializer
from stores.models import Store


class StoreView(viewsets.ModelViewSet):

    serializer_class = StoreSerializer
    queryset = Store.objects.all()
