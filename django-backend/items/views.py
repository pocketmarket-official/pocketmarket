from django.shortcuts import render
from rest_framework import viewsets
from items.serializer import ItemSerializer
from items.models import Item
from items.serializer import SetSerializer
from items.models import Set
from items.serializer import SetOptSerializer
from items.models import SetOpt
from items.serializer import ItemAddSerializer
from items.models import ItemAdd
from items.serializer import AddCatSerializer
from items.models import AddCat
from items.serializer import AddSerializer
from items.models import Add


class ItemView(viewsets.ModelViewSet):

    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class SetView(viewsets.ModelViewSet):

    serializer_class = SetSerializer
    queryset = Set.objects.all()

class SetOptView(viewsets.ModelViewSet):

    serializer_class = SetOptSerializer
    queryset = SetOpt.objects.all()

class ItemAddView(viewsets.ModelViewSet):

    serializer_class = ItemAddSerializer
    queryset = ItemAdd.objects.all()

class AddCatView(viewsets.ModelViewSet):

    serializer_class = AddCatSerializer
    queryset = AddCat.objects.all()

class AddView(viewsets.ModelViewSet):

    serializer_class = AddSerializer
    queryset = Add.objects.all()