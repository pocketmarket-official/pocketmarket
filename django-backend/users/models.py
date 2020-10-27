"""
define users related models
"""

from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import datetime

class User(AbstractUser):
    """ User Model Definition """
    testField = models.CharField(max_length=30, default='')

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
