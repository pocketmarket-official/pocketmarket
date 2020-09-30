from django.shortcuts import render
from rest_framework import viewsets
from keymaps.serializer import KeymapSerializer
from keymaps.models import Keymap


class KeymapView(viewsets.ModelViewSet):

    serializer_class = KeymapSerializer
    queryset = Keymap.objects.all()
