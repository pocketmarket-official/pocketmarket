from django.shortcuts import render
from rest_framework import viewsets
from storeDics.serializer import StoreDicSerializer
from storeDics.models import StoreDic


class StoreDicView(viewsets.ModelViewSet):

    serializer_class = StoreDicSerializer
    queryset = StoreDic.objects.all()
