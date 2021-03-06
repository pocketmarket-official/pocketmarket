from django.shortcuts import render
from rest_framework import viewsets
from keymaps.serializer import StoreKeymapSerializer
from keymaps.models import StoreKeymap
from keymaps.serializer import TouchGroupSerializer
from keymaps.models import TouchGroup
from keymaps.serializer import KeymapSerializer
from keymaps.models import Keymap


class StoreKeymapView(viewsets.ModelViewSet):

    serializer_class = StoreKeymapSerializer
    queryset = StoreKeymap.objects.all()

class TouchGroupView(viewsets.ModelViewSet):

    serializer_class = TouchGroupSerializer
    queryset = TouchGroup.objects.all()

class KeymapView(viewsets.ModelViewSet):

    serializer_class = KeymapSerializer
    queryset = Keymap.objects.all()
