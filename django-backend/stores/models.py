"""
define stores related models
"""
from django.db import models


class Store(models.Model):

    """ Store Model Definition """

    brandCd = models.Foreignkey(brand)
    storeCd = models.CharField(max_length=10)
    storeName = models.CharField(max_length=50)
    storeCeo = models.CharField(max_length=50)
    bizopNo = models.CharField(max_length=20)
    storeTel = models.CharField(max_length=20)
    storeMobile = models.CharField(max_length=20)
    storeFax = models.CharField(max_length=20)
    postCd = models.CharField(max_length=6)
    storeMail = models.CharField(max_length=50)
    storeAddr1 = models.CharField(max_length=200)
    storeAddr2 = models.CharField(max_length=200)
    storeOldAddr = models.CharField(max_length=200)
