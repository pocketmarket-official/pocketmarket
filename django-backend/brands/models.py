"""
define festivals related models
"""
from django.db import models


class Brand(models.Model):

    """ Brand Model Definition """

    brandCd = models.CharField(max_length=5)
    brandName = models.CharField(max_length=100)
    useYn = models.CharField(max_length=1)
    insDt = models.DateTimeField()
    insUs = models.CharField(max_length=20)
    modDt = models.DateTimeField()
    modUs = models.CharField(max_lenght=20)

