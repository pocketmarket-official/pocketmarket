from django.shortcuts import render
from rest_framework import viewsets
from myplaces.serializer import MyplaceSerializer
from myplaces.models import Myplace


class MyplaceView(viewsets.ModelViewSet):

    serializer_class = MyplaceSerializer
    queryset = Myplace.objects.all()
