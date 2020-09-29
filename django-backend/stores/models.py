"""
define stores related models
"""
from django.db import models
from datetime import datetime

from django.apps import apps

class Store(models.Model):

    """ Store Model Definition """
    brandCd = models.ForeignKey('brands.Brand', on_delete=models.CASCADE, default=0)
    storeCd = models.CharField(max_length=10, default='00000')
    storeName = models.CharField(max_length=50, default='')
    storeCeo = models.CharField(max_length=50, blank=True)
    bizopNo = models.CharField(max_length=20, blank=True)
    storeTel = models.CharField(max_length=20, blank=True)
    storeMobile = models.CharField(max_length=20, blank=True)
    storeFax = models.CharField(max_length=20, blank=True)
    postCd = models.CharField(max_length=6, blank=True)
    storeMail = models.CharField(max_length=50, blank=True)
    storeAddr1 = models.CharField(max_length=200, blank=True)
    storeAddr2 = models.CharField(max_length=200, blank=True)
    storeOldAddr = models.CharField(max_length=200, blank=True)