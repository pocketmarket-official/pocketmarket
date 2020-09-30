from django.shortcuts import render
from rest_framework import viewsets
from cprts.serializer import CprtSerializer
from cprts.models import Cprt


class CprtView(viewsets.ModelViewSet):

    serializer_class = CprtSerializer
    queryset = Cprt.objects.all()
