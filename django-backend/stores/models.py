"""
define stores related models
"""
from django.db import models
from datetime import datetime

from django.apps import apps

class Store(models.Model):
    """ Store Model Definition """
    brandCd = models.ForeignKey('brands.Brand', on_delete=models.CASCADE, default=1)
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

class storeFunSet(models.Model):
    storeCd = models.ForeignKey('store', on_delete=models.CASCADE, default=1)
    tmnId = models.CharField(max_length=20, blank=True)
    normVanCd = models.CharField(max_length=3, default='000')
    callFg = models.CharField(max_length=1, default='0')
    ordPrtTy = models.CharField(max_length=1, default='0')
    alrYn = models.CharField(max_length=1, default='N')
    alrTy = models.CharField(max_length=1, default='0')
    alrPntFg = models.CharField(max_length=1, default='0')
    alrUrl = models.CharField(max_length=100, blank=True)
    kktAlrCallId = models.CharField(max_length=20, blank=True)
    kktAlrAccessKey = models.CharField(max_length=255, blank=True)
    kktAlrFailFg = models.CharField(max_length=1, default='0')
    kktAlrId = models.CharField(max_length=50, blank=True)
    kktAlrPw = models.CharField(max_length=50, blank=True)
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

class storePos(models.Model):
    storeCd = models.ForeignKey('store', on_delete=models.CASCADE, default=1)
    # keymapCd
    # grpCd
    ordStartNo = models.CharField(max_length=10, default='0000')
    ordEndNo = models.CharField(max_length=10, default='9999')
    cntPayYn = models.CharField(max_length=1, default='N')
    kktAlrTmplCd = models.CharField(max_length=50, blank=True)
    takeOutYn = models.CharField(max_length=1, default='Y')
    callNoYn = models.CharField(max_length=1, default='Y')
    useYn = models.CharField(max_length=1, default='Y')
