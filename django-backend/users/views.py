from django.shortcuts import render
from rest_framework import viewsets
from users.serializer import UserSerializer
from users.models import User
from users.models import Point
from users.serializer import PointSerializer
from users.models import MyPlace
from users.serializer import MyPlaceSerializer
from users.models import Business
from users.serializer import BusinessSerializer


class UserView(viewsets.ModelViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all()


class PointView(viewsets.ModelViewSet):

    serializer_class = PointSerializer
    queryset = Point.objects.all()

class MyPlaceView(viewsets.ModelViewSet):

    serializer_class = MyPlaceSerializer
    queryset = MyPlace.objects.all()

class BusinessView(viewsets.ModelViewSet):

    serializer_class = BusinessSerializer
    queryset = Business.objects.all()