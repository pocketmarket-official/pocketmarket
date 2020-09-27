from django.shortcuts import render
from rest_framework import viewsets
from points.serializer import PointSerializer
from points.models import Point


class PointView(viewsets.ModelViewSet):

    serializer_class = PointSerializer
    queryset = Point.objects.all()
