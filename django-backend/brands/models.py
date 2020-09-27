"""
define festivals related models
"""
from django.db import models


class Brand(models.Model):

    """ Brand Model Definition """

    brandName = models.CharField(max_length=50)
