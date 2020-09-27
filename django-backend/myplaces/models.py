"""
define myplaces related models
"""
from django.db import models


class Myplace(models.Model):

    """ Myplace Model Definition """

    myplaceName = models.CharField(max_length=50)
