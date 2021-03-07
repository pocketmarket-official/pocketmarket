"""
define reviews related models
"""
from django.db import models
from django.utils import timezone

class Review(models.Model):

    """ Review Model Definition """

    storeCd = models.ForeignKey('stores.store', on_delete=models.CASCADE, null=True, blank=True)
    saleDt = models.CharField(max_length=8, null=True, blank=True)
    billNo = models.CharField(max_length=10, null=True, blank=True)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, null=True, blank=True)
    reviewDt = models.CharField(max_length=8, null=True, blank=True)
    context = models.TextField(null=True, blank=True)
    img1 = models.ImageField(upload_to='images/review', null=True, blank=True)
    img2 = models.ImageField(upload_to='images/review', null=True, blank=True)
    img3 = models.ImageField(upload_to='images/review', null=True, blank=True)
    img4 = models.ImageField(upload_to='images/review', null=True, blank=True)
    img5 = models.ImageField(upload_to='images/review', null=True, blank=True)
    deleteYn = models.CharField(max_length=5, default='N', blank=True, null=True)
    insDt = models.DateTimeField(default=timezone.now, blank=True, null=True)
    insUs = models.CharField(max_length=30, null=True, blank=True)
    modDt = models.DateTimeField(default=timezone.now, blank=True, null=True)
    modUs = models.CharField(max_length=30, null=True, blank=True)

class ReviewLike(models.Model):
    review = models.ForeignKey('Review', on_delete=models.CASCADE, default=1)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    likeYn = models.CharField(max_length=5, default='Y')
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)

class Reply(models.Model):
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    saleDt = models.CharField(max_length=8, null=True)
    billNo = models.CharField(max_length=10, null=True)
    seq = models.IntegerField(default=1)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    context = models.TextField(null=True)
    deleteYn = models.CharField(max_length=5, default='N')
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)
