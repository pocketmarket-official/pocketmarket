from django.shortcuts import render
from rest_framework import viewsets
from items.serializer import ItemSerializer
from items.models import Item


class ItemView(viewsets.ModelViewSet):

    serializer_class = ItemSerializer
    queryset = Item.objects.all()
