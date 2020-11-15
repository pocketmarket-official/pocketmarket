from django.shortcuts import render
from rest_framework import viewsets
from kdses.serializer import MasterSerializer
from kdses.models import Master
from kdses.serializer import SetMasterSerializer
from kdses.models import SetMaster
from kdses.serializer import KdsHeaderSerializer
from kdses.models import KdsHeader
from kdses.serializer import KdsDetailSerializer
from kdses.models import KdsDetail


class MasterView(viewsets.ModelViewSet):

    serializer_class = MasterSerializer
    queryset = Master.objects.all()

class SetMasterView(viewsets.ModelViewSet):

    serializer_class = SetMasterSerializer
    queryset = SetMaster.objects.all()

class KdsHeaderView(viewsets.ModelViewSet):

    serializer_class = KdsHeaderSerializer
    queryset = KdsHeader.objects.all()

class KdsDetailView(viewsets.ModelViewSet):

    serializer_class = KdsDetailSerializer
    queryset = KdsDetail.objects.all()