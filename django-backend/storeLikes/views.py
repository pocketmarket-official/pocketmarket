from django.shortcuts import render
from rest_framework import viewsets
from storeLikes.serializer import StoreLikeSerializer
from storeLikes.models import StoreLike


class StoreLikeView(viewsets.ModelViewSet):

    serializer_class = StoreLikeSerializer
    queryset = StoreLike.objects.all()
