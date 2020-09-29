"""
define festivals related models
"""
from django.db import models
from datetime import datetime


class Brand(models.Model):

    """ Brand Model Definition """
    brandCd = models.CharField(max_length=5, default='00000')
    brandName = models.CharField(max_length=100, default='')
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')