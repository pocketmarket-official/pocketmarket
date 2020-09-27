from django.shortcuts import render
from rest_framework import viewsets
from replies.serializer import ReplySerializer
from replies.models import Reply


class ReplyView(viewsets.ModelViewSet):

    serializer_class = ReplySerializer
    queryset = Reply.objects.all()
