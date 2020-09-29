"""
define items related models
"""
from django.db import models
from datetime import datetime

class Item(models.Model):

    """ Item Model Definition """

    brandCd = models.ForeignKey('brands.Brand', on_delete=models.CASCADE, default=1)
    itemCd = models.CharField(max_length = 20, default='00000')
    itemName = models.CharField(max_length = 200, default='')
    price = models.FloatField(default=0.0)
    takeOutPrice = models.FloatField(default=0.0)
    setYn = models.CharField(max_length=1, default='N')
    itemFg = models.CharField(max_length=1, default='1')
    useYn = models.CharField(max_length=1, default='Y')
    imgSmallUrl = models.CharField(max_length=200, blank=True)
    ordPrtYn = models.CharField(max_length=1, default='N')
    ordPrtText = models.CharField(max_length=100, blank=True)
    kdsSendYn = models.CharField(max_length=1, default='N')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')


class ItemSet(models.Model):
    setItemCd = models.ForeignKey('items.Item', on_delete=models.CASCADE, default=1)
    seq = models.IntegerField(default=1)
    subItemCd = models.CharField(max_length=20, default='00000')
    subItemQty = models.IntegerField(default=1)
    subItemPric = models.FloatField(default=0.0)
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

class ItemSetOpt(models.Model):
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    subItemCd = models.ForeignKey('items.Item', on_delete=models.CASCADE, default=1)
    changeItemCd = models.CharField(max_length=20, default='00000')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

class ItemAdd(models.Model):
    itemCd = models.ForeignKey('items.Item', on_delete=models.CASCADE, default=1)
    itemAddCd = models.CharField(max_length=20, default='00000')
    itemSort = models.IntegerField(default=0)
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

class itemAddCat(models.Model):
    addCatCd = models.CharField(max_length=5, default='00000')
    addCatNm = models.CharField(max_length=20, default='')
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

class itemAddCatMaster(models.Model):
    addCatCd = models.ForeignKey('items.itemAddCat', on_delete=models.CASCADE, default=1)
    addItemCd = models.ForeignKey('items.Item', on_delete=models.CASCADE, default=1)
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')
