from django.shortcuts import render
from rest_framework import viewsets
from reviews.serializer import ReviewSerializer
from reviews.models import Review
from reviews.serializer import ReviewLikeSerializer
from reviews.models import ReviewLike
from reviews.serializer import ReviewImageSerializer
from reviews.models import ReviewImage
from reviews.serializer import ReplySerializer
from reviews.models import Reply


class ReviewView(viewsets.ModelViewSet):

    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

class ReviewLikeView(viewsets.ModelViewSet):

    serializer_class = ReviewLikeSerializer
    queryset = ReviewLike.objects.all()


class ReviewImageView(viewsets.ModelViewSet):

    serializer_class = ReviewImageSerializer
    queryset = ReviewImage.objects.all()

class ReplyView(viewsets.ModelViewSet):
    serializer_class = ReplySerializer
    queryset = Reply.objects.all()
