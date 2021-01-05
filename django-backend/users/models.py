"""
define users related models
"""

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

class User(AbstractUser):
    """ User Model Definition """
    profileName = models.CharField(max_length=30, default='')
    profileImage = models.ImageField(upload_to="images/userProfile", null=True)
    androidToken = models.CharField(max_length=255, blank=True)
    iosToken = models.CharField(max_length=255, blank=True)
    bizYn = models.CharField(max_length=1, default='N')
    guestYn = models.CharField(max_length=1, default='N')

class Point(models.Model):
    """ Point Model Definition """
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    remainPoint = models.IntegerField(null=True)
    totExchangeLike = models.IntegerField(null=True)
    totExchangePoint = models.IntegerField(null=True)
    totSpendPoint = models.IntegerField(null=True)
    lastExchangeDate = models.CharField(max_length=8, null=True)
    insDt = models.DateTimeField(default=timezone.now, null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=timezone.now, null=True)
    modUs = models.CharField(max_length=30,  null=True)

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
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)

class Business(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    seq = models.IntegerField(default=1)
    store = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1, related_name='stores')
    bizNo = models.CharField(max_length=15, blank=True)
    bizName = models.CharField(max_length=100, blank=True)
    openDttm = models.CharField(max_length=8, blank=True)
    registerNo = models.CharField(max_length=15, blank=True)
    bizAddr = models.CharField(max_length=100, blank=True)
    storeAddr = models.CharField(max_length=100, blank=True)
    orderYn = models.CharField(max_length=1, default='Y')
    BizRegi = models.ImageField(null=True, upload_to='images/bizRegi')
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)

class Question(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE,default=1)
    questionDate = models.CharField(max_length=8, blank=True, null=True)
    content = models.TextField()
    img1 = models.ImageField(upload_to='images/question', null=True)
    img2 = models.ImageField(upload_to='images/question', null=True)
    img3 = models.ImageField(upload_to='images/question', null=True)
    img4 = models.ImageField(upload_to='images/question', null=True)
    img5 = models.ImageField(upload_to='images/question', null=True)
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)

