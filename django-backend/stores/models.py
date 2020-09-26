"""
define stores related models
"""
from django.db import models


class Store(models.Model):

    """ Store Model Definition """

    storeName = models.CharField(max_length=50)
