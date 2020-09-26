from django.shortcuts import render
from rest_framework import viewsets
from festivals.serializer import FestivalSerializer
from festivals.models import Festival


class FestivalView(viewsets.ModelViewSet):

    serializer_class = FestivalSerializer
    queryset = Festival.objects.all()
