"""
define storeLikes related models
"""
from django.db import models


class StoreLike(models.Model):

    """ StoreLike Model Definition """

    storeLikeName = models.CharField(max_length=50)
