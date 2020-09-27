"""
define points related models
"""
from django.db import models


class Point(models.Model):

    """ Point Model Definition """

    pointName = models.CharField(max_length=50)
