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
    openTm = models.CharField(max_length=6, blank=True)
    closeTm = models.CharField(max_length=6, blank=True)
    dvYn = models.CharField(max_length=1, default='N')
    useYn = models.CharField(max_length=1, default='Y')
    bankCd = models.CharField(max_length=3, blank=True)
    bankNo = models.CharField(max_length=40, blank=True)
    openDt = models.CharField(max_length=8, blank=True)
    closeDt = models.CharField(max_length=8, blank=True)
    imgLogoUrl = models.CharField(max_length=200, blank=True)
    orgIf = models.CharField(max_length=1000, blank=True)
    xPosition = models.FloatField(blank=True, null=True)
    yPosition = models.FloatField(blank=True, null=True)
    likeCount = models.IntegerField(default=0)
    score = models.FloatField(default=0.0)
    description = models.CharField(max_length=50, blank=True)
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')