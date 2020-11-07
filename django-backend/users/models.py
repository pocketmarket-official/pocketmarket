"""
define users related models
"""

from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import datetime

class User(AbstractUser):
    """ User Model Definition """
    profileName = models.CharField(max_length=30, default='')
    profileImage = models.CharField(max_length=255, default='')


    pass

class Point(models.Model):
    """ Point Model Definition """
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    remainPoint = models.IntegerField(null=True)
    totExchangeLike = models.IntegerField(null=True)
    totExchangePoint = models.IntegerField(null=True)
    totSpendPoint = models.IntegerField(null=True)
    lastExchangeDate = models.CharField(max_length=8, null=True)
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30, default='defaultValue', null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30, default='defaultValue', null=True)

class MyPlace(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    seq = models.IntegerField(default=1)
    addrName = models.CharField(max_length=50, null=True)
    addr1 = models.CharField(max_length=200, null=True)
    addr2 = models.CharField(max_length=200, null=True)
    oldAddr = models.CharField(max_length=200, null=True)
    xPosition = models.FloatField(null=True)
    yPosition = models.FloatField(null=True)
    defaultYn = models.CharField(max_length=1, default='N')
    deleteYn = models.CharField(max_length=1, default='N')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')
