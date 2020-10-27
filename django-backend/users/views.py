from django.shortcuts import render
from rest_framework import viewsets
from users.serializer import UserSerializer
from users.models import User
from users.models import Point
from users.serializer import PointSerializer


class UserView(viewsets.ModelViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all()


class PointView(viewsets.ModelViewSet):

    serializer_class = PointSerializer
    queryset = Point.objects.all()
