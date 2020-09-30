from django.shortcuts import render
from rest_framework import viewsets
from festivals.serializer import FestivalSerializer
from festivals.models import Festival
from festivals.serializer import JoinSerializer
from festivals.models import Join


class FestivalView(viewsets.ModelViewSet):

    serializer_class = FestivalSerializer
    queryset = Festival.objects.all()

class JoinView(viewsets.ModelViewSet):

    serializer_class = JoinSerializer
    queryset = Join.objects.all()
