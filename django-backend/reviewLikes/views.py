from django.shortcuts import render
from rest_framework import viewsets
from reviewLikes.serializer import ReviewLikeSerializer
from reviewLikes.models import ReviewLike


class ReviewLikeView(viewsets.ModelViewSet):

    serializer_class = ReviewLikeSerializer
    queryset = ReviewLike.objects.all()
