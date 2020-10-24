"""
define items related models
"""
from django.db import models
from datetime import datetime


class Master(models.Model):
    """ Master Model Definition """
    storeCd = models.CharField(max_length=10, null=True)
    refreshTime = models.IntegerField(default=1)
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30, default='defaultValue', null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30, default='defaultValue', null=True)

class SetMaster(models.Model):
    storeCd = models.CharField(max_length=10, null=True)
    cprtGroupCd = models.ForeignKey('cprts.Group', on_delete=models.CASCADE, default=1)
    monitorFlag = models.CharField(max_length=1, default=1) #1:기본4분할/2:기본6분할/3:8분할/4:10분할/5:긴4분할/6:긴6분할
    summaryYn = models.CharField(max_length=1, default='Y')
    fontSize = models.CharField(max_length=1, default=10)
    orderExpandYn = models.CharField(max_length=1, default='Y')
    soundYn = models.CharField(max_length=1, default='Y')
    backRgb = models.CharField(max_length=20, null=True)
    foreRgb = models.CharField(max_length=20, null=True)
    revertRgb = models.CharField(max_length=20, null=True)
    voidRgb = models.CharField(max_length=20, null=True)
    eatInRgb = models.CharField(max_length=20, null=True)
    takeOutRgb = models.CharField(max_length=20, null=True)
    deliveryRgb = models.CharField(max_length=20, null=True)
    driveThruRgb = models.CharField(max_length=20, null=True)
    preOrderRgb = models.CharField(max_length=20, null=True)
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30, default='defaultValue', null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30, default='defaultValue', null=True)