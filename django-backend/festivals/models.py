"""
define festivals related models
"""
from django.db import models
from datetime import datetime

class Festival(models.Model):

    """ Festival Model Definition """

    festivalCd = models.CharField(max_length=5, default='0000')
    festivalName = models.CharField(max_length=100, default='')
    startDt = models.CharField(max_length=8, default='')
    endDt = models.CharField(max_length=8, default='')
    descriptionHeader = models.CharField(max_length=100, default='')
    descriptionDetail = models.CharField(max_length=500, default='')
    joinCount = models.IntegerField(default=0)
    simulOperCount = models.IntegerField(default=0)
    innerMapUrl = models.CharField(max_length=200, blank=True)
    addr1 = models.CharField(max_length=200, default='')
    addr2 = models.CharField(max_length=200, default='')
    oldAddr = models.CharField(max_length=200, default='')
    organ = models.CharField(max_length=50, default='')
    organManager = models.CharField(max_length=10, default='')
    organPhone = models.CharField(max_length=20, default='')
    organMail = models.CharField(max_length=50, default='')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

class Join(models.Model):
    festivalCd = models.ForeignKey('festivals.Festival', on_delete=models.CASCADE, default=1)
    seq = models.IntegerField(default=1)
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')
