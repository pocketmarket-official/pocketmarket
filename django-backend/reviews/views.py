from django.shortcuts import render
from rest_framework import viewsets
from reviews.serializer import ReviewSerializer
from reviews.models import Review
from reviews.serializer import ReviewImageSerializer
from reviews.models import ReviewImage


class ReviewView(viewsets.ModelViewSet):

    serializer_class = ReviewSerializer
    queryset = Review.objects.all()


class ReviewImageView(viewsets.ModelViewSet):

    serializer_class = ReviewImageSerializer
    queryset = ReviewImage.objects.all()
