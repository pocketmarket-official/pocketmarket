"""
define reviews related models
"""
from django.db import models


class Review(models.Model):

    """ Review Model Definition """

    reviewName = models.CharField(max_length=50)
