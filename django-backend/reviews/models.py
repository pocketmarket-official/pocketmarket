"""
define reviews related models
"""
from django.db import models
from datetime import datetime

class Review(models.Model):

    """ Review Model Definition """

    storeCd = models.ForeignKey('stores.store', on_delete=models.CASCADE, default=1)
    saleDt = models.CharField(max_length=8, null=True)
    billNo = models.CharField(max_length=10, null=True)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    context = models.TextField(null=True)
    likeUser = models.ManyToManyField('users.User', related_name='likeUser')
    deleteYn = models.CharField(max_length=1, default='N')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

    def likes_count(self):
        return self.likes_count()

class ReviewImage(models.Model):
    review = models.ForeignKey('reviews.Review', on_delete=models.CASCADE, default=1)
    seq = models.IntegerField(null=True)
    url = models.CharField(max_length=200, null=True)
    deleteYn = models.CharField(max_length=1, default='N')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

class Reply(models.Model):
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    saleDt = models.CharField(max_length=8, null=True)
    billNo = models.CharField(max_length=10, null=True)
    seq = models.IntegerField(default=1)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)
    context = models.TextField(null=True)
    deleteYn = models.CharField(max_length=1, default='N')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')