"""
define stores related models
"""
from django.db import models
from django.utils import timezone

class Store(models.Model):
    """ Store Model Definition """
    brandCd = models.ForeignKey('brands.Brand', on_delete=models.CASCADE, default=1)
    storeCd = models.CharField(max_length=10, default='00000')
    storeName = models.CharField(max_length=50, null=True, blank=True)
    storeCeo = models.CharField(max_length=50, null=True, blank=True)
    bizopNo = models.CharField(max_length=20, null=True, blank=True)
    tel = models.CharField(max_length=20, null=True, blank=True)
    mobile = models.CharField(max_length=20, null=True, blank=True)
    fax = models.CharField(max_length=20, null=True, blank=True)
    postCd = models.CharField(max_length=6, null=True, blank=True)
    mail = models.CharField(max_length=50, null=True, blank=True)
    addr1 = models.CharField(max_length=200, null=True, blank=True)
    addr2 = models.CharField(max_length=200, null=True, blank=True)
    oldAddr = models.CharField(max_length=200, null=True, blank=True)
    openTm = models.CharField(max_length=6, null=True, blank=True)
    closeTm = models.CharField(max_length=6, null=True, blank=True)
    dvYn = models.CharField(max_length=1, default='N', blank=True)
    useYn = models.CharField(max_length=1, default='Y', blank=True)
    bankCd = models.CharField(max_length=3, null=True, blank=True)
    bankNo = models.CharField(max_length=40, null=True, blank=True)
    openDt = models.CharField(max_length=8, null=True, blank=True)
    closeDt = models.CharField(max_length=8, null=True, blank=True)
    openYn = models.CharField(max_length=1, default='Y')
    imgLogoUrl = models.CharField(max_length=200, null=True, blank=True)
    orgIf = models.CharField(max_length=1000, null=True, blank=True)
    xPosition = models.FloatField(null=True)
    yPosition = models.FloatField(null=True)
    score = models.FloatField(default=0.0)
    description = models.CharField(max_length=250, null=True, blank=True)
    androidToken = models.CharField(max_length=255, blank=True)
    iosToken = models.CharField(max_length=255, blank=True)
    insDt = models.DateTimeField(default=timezone.now, null=True, blank=True)
    insUs = models.CharField(max_length=30, null=True, blank=True)
    modDt = models.DateTimeField(default=timezone.now, null=True, blank=True)
    modUs = models.CharField(max_length=30, null=True, blank=True)

    def __str__(self):
        return self.storeName

class Funset(models.Model):
    storeCd = models.ForeignKey('store', on_delete=models.CASCADE, default=1)
    tmnId = models.CharField(max_length=20, null=True)
    normVanCd = models.CharField(max_length=3, null=True)
    callFg = models.CharField(max_length=3, null=True)
    ordPrtTy = models.CharField(max_length=3, null=True)
    alrYn = models.CharField(max_length=1, default='N')
    alrTy = models.CharField(max_length=3, null=True)
    alrPntFg = models.CharField(max_length=3, null=True)
    alrUrl = models.CharField(max_length=100, null=True)
    kktAlrCallId = models.CharField(max_length=20, null=True)
    kktAlrAccessKey = models.CharField(max_length=255, null=True)
    kktAlrFailFg = models.CharField(max_length=3, null=True)
    kktAlrId = models.CharField(max_length=50, null=True)
    kktAlrPw = models.CharField(max_length=50, null=True)
    insDt = models.DateTimeField(default=timezone.now, null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=timezone.now, null=True)
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
    dicType = models.CharField(max_length=3, default='1') #1:구매이력 있음/2:리뷰이력 있음
    insDt = models.DateTimeField(default=timezone.now, null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=timezone.now, null=True)
    modUs = models.CharField(max_length=30,  null=True)

class StoreLike(models.Model):
    store = models.ForeignKey('store', on_delete=models.CASCADE, default=1)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    likeYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=timezone.now, null=True, blank=True)
    insUs = models.CharField(max_length=30,  null=True, blank=True)
    modDt = models.DateTimeField(default=timezone.now, null=True, blank=True)
    modUs = models.CharField(max_length=30,  null=True, blank=True)
