"""
define cprts related models
"""
from django.db import models
from django.utils import timezone

class Cprt(models.Model):

    """ Cprt Model Definition """

    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    cprtCd = models.CharField(max_length=5, default='000')
    cprtName = models.CharField(max_length=50, default='')
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)

class Group(models.Model):
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    cprtGroupCd = models.CharField(max_length=5, default='000')
    cprtGroupName = models.CharField(max_length=50, default='')
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)

class Relation(models.Model):
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    cprtGroupCd = models.ForeignKey('cprts.Group', on_delete=models.CASCADE, default=1)
    cprtCd = models.ForeignKey('cprts.Cprt', on_delete=models.CASCADE, default=1)
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)
