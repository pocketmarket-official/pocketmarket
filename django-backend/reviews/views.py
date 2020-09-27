from django.shortcuts import render
from rest_framework import viewsets
from reviews.serializer import ReviewSerializer
from reviews.models import Review


class ReviewView(viewsets.ModelViewSet):

    serializer_class = ReviewSerializer
    queryset = Review.objects.all()
