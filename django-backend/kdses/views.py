from django.shortcuts import render
from rest_framework import viewsets
from kdses.serializer import MasterSerializer
from kdses.models import Master
from kdses.serializer import SetMasterSerializer
from kdses.models import SetMaster


class MasterView(viewsets.ModelViewSet):

    serializer_class = MasterSerializer
    queryset = Master.objects.all()

class SetMasterView(viewsets.ModelViewSet):

    serializer_class = SetMasterSerializer
    queryset = SetMaster.objects.all()