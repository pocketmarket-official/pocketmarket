from django.shortcuts import render
from rest_framework import viewsets
from brands.serializer import BrandSerializer
from brands.models import Brand


class BrandView(viewsets.ModelViewSet):

    serializer_class = BrandSerializer
    queryset = Brand.objects.all()
