from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from brand.serializer import BrandSerializer
from brand.models import Brand


class BrandView(viewsets.ModelViewSet):

    serializer_class = BrandSerializer
    queryset = Brand.objects.all()
