from django.shortcuts import render
from rest_framework import viewsets
from cprts.serializer import MasterSerializer
from cprts.models import Master


class MasterView(viewsets.ModelViewSet):

    serializer_class = MasterSerializer
    queryset = Master.objects.all()
