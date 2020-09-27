"""
define reviewLikes related models
"""
from django.db import models


class ReviewLike(models.Model):

    """ ReviewLike Model Definition """

    reviewLikeName = models.CharField(max_length=50)
