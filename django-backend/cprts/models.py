"""
define cprts related models
"""
from django.db import models
from datetime import datetime

class Master(models.Model):

    """ Cprt Model Definition """

    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    cprtCd = models.CharField(max_length=5, default='000')
    cprtName = models.CharField(max_length=50, default='')
    useYn = models.CharField(max_length=1, default='Y')
    cprtName = models.CharField(max_length=50)
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

class Group(models.Model):
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    cprtGroupCd = models.CharField(max_length=5, default='000')
    cprtGrupName = models.CharField(max_length=50, default='')
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

