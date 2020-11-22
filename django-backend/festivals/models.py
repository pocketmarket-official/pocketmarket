"""
define festivals related models
"""
from django.db import models
from datetime import datetime
from stores.models import Store

class Festival(models.Model):

    """ Festival Model Definition """

    festivalCd = models.CharField(max_length=5, blank=True, null=True)
    festivalName = models.CharField(max_length=100, blank=True, null=True)
    startDt = models.CharField(max_length=8, blank=True, null=True)
    endDt = models.CharField(max_length=8, blank=True, null=True)
    descriptionHeader = models.CharField(max_length=100, blank=True, null=True)
    descriptionDetail = models.CharField(max_length=500, blank=True, null=True)
    joinCount = models.IntegerField(blank=True, null=True)
    simulOperCount = models.IntegerField(blank=True, null=True)
    img = models.ImageField(upload_to='images/festival/img', null=True)
    innerMap = models.ImageField(upload_to='images/festival/innerMap', null=True)
    addr1 = models.CharField(max_length=200, blank=True, null=True)
    addr2 = models.CharField(max_length=200, blank=True, null=True)
    oldAddr = models.CharField(max_length=200, blank=True, null=True)
    organ = models.CharField(max_length=50, blank=True, null=True)
    organManager = models.CharField(max_length=10, blank=True, null=True)
    organPhone = models.CharField(max_length=20, blank=True, null=True)
    organMail = models.CharField(max_length=50, blank=True, null=True)
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, null=True)

    def __str__(self):
        return self.festivalName

class Join(models.Model):
    festivalCd = models.ForeignKey('festivals.Festival', on_delete=models.CASCADE, default=1)
    seq = models.IntegerField(default=1)
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, null=True)

