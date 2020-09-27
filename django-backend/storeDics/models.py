"""
define storeDics related models
"""
from django.db import models


class StoreDic(models.Model):

    """ StoreDic Model Definition """

    storeDicName = models.CharField(max_length=50)
