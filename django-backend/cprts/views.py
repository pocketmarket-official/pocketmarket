from django.shortcuts import render
from rest_framework import viewsets
from cprts.serializer import CprtSerializer
from cprts.serializer import GroupSerializer
from cprts.serializer import RelationSerializer
from cprts.models import Cprt
from cprts.models import Group
from cprts.models import Relation


class CprtView(viewsets.ModelViewSet):

    serializer_class = CprtSerializer
    queryset = Cprt.objects.all()

class GroupView(viewsets.ModelViewSet):

    serializer_class = GroupSerializer
    queryset = Group.objects.all()

class RelationView(viewsets.ModelViewSet):

    serializer_class = RelationSerializer
    queryset = Relation.objects.all()
