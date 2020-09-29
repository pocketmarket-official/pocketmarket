"""
define items related models
"""
from django.db import models


class Item(models.Model):

    """ Item Model Definition """

    itemName = models.CharField(max_length=50)
