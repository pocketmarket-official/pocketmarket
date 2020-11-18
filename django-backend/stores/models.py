"""
define stores related models
"""
from django.db import models
from datetime import datetime

class Store(models.Model):
    """ Store Model Definition """
    brandCd = models.ForeignKey('brands.Brand', on_delete=models.CASCADE, default=1)
    storeCd = models.CharField(max_length=10, default='00000')
    storeName = models.CharField(max_length=50, default='')
    storeCeo = models.CharField(max_length=50, null=True)
    bizopNo = models.CharField(max_length=20, null=True)
    tel = models.CharField(max_length=20, null=True)
    mobile = models.CharField(max_length=20, null=True)
    fax = models.CharField(max_length=20, null=True)
    postCd = models.CharField(max_length=6, null=True)
    mail = models.CharField(max_length=50, null=True)
    addr1 = models.CharField(max_length=200, null=True)
    addr2 = models.CharField(max_length=200, null=True)
    oldAddr = models.CharField(max_length=200, null=True)
    openTm = models.CharField(max_length=6, null=True)
    closeTm = models.CharField(max_length=6, null=True)
    dvYn = models.CharField(max_length=1, default='N')
    useYn = models.CharField(max_length=1, default='Y')
    bankCd = models.CharField(max_length=3, null=True)
    bankNo = models.CharField(max_length=40, null=True)
    openDt = models.CharField(max_length=8, null=True)
    closeDt = models.CharField(max_length=8, null=True)
    imgLogoUrl = models.CharField(max_length=200, null=True)
    orgIf = models.CharField(max_length=1000, null=True)
    xPosition = models.FloatField(null=True)
    yPosition = models.FloatField(null=True)
    score = models.FloatField(default=0.0)
    description = models.CharField(max_length=50, null=True)
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30, null=True)

class Funset(models.Model):
    storeCd = models.ForeignKey('store', on_delete=models.CASCADE, default=1)
    tmnId = models.CharField(max_length=20, null=True)
    normVanCd = models.CharField(max_length=3, null=True)
    callFg = models.CharField(max_length=1, null=True)
    ordPrtTy = models.CharField(max_length=1, null=True)
    alrYn = models.CharField(max_length=1, default='N')
    alrTy = models.CharField(max_length=1, null=True)
    alrPntFg = models.CharField(max_length=1, null=True)
    alrUrl = models.CharField(max_length=100, null=True)
    kktAlrCallId = models.CharField(max_length=20, null=True)
    kktAlrAccessKey = models.CharField(max_length=255, null=True)
    kktAlrFailFg = models.CharField(max_length=1, null=True)
    kktAlrId = models.CharField(max_length=50, null=True)
    kktAlrPw = models.CharField(max_length=50, null=True)
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30,  null=True)

class Pos(models.Model):
    storeCd = models.ForeignKey('store', on_delete=models.CASCADE, default=1)
    keymapCd = models.ForeignKey('keymaps.StoreKeymap', on_delete=models.CASCADE, default=1)
    ordStartNo = models.CharField(max_length=10, null=True)
    ordEndNo = models.CharField(max_length=10, null=True)
    cntPayYn = models.CharField(max_length=1, null=True)
    kktAlrTmplCd = models.CharField(max_length=50, null=True)
    takeOutYn = models.CharField(max_length=1, default='Y')
    callNoYn = models.CharField(max_length=1, default='Y')
    useYn = models.CharField(max_length=1, default='Y')

class StoreDic(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    store = models.ForeignKey('Store', on_delete=models.CASCADE, default=1)
    dicType = models.CharField(max_length=1, default='1') #1:구매이력 있음/2:리뷰이력 있음
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30,  null=True)

class StoreLike(models.Model):
    store = models.ForeignKey('store', on_delete=models.CASCADE, default=1)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    likeYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30,  null=True)
