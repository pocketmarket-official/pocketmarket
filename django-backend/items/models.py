"""
define items related models
"""
from django.db import models
from django.utils import timezone

class Item(models.Model):
    """ Item Model Definition """

    brandCd = models.ForeignKey('brands.Brand', on_delete=models.CASCADE, default=1)
    itemCd = models.CharField(max_length=20, default='00000')
    itemName = models.CharField(max_length=200, default='')
    price = models.FloatField(default=0.0)
    takeOutPrice = models.FloatField(default=0.0, null=True)
    setYn = models.CharField(max_length=1, default='N')
    itemFg = models.CharField(max_length=1, default='1')
    itemDesc = models.CharField(max_length=255, default='')
    useYn = models.CharField(max_length=1, default='Y')
    imgSmallUrl = models.CharField(max_length=200, null=True)
    ordPrtYn = models.CharField(max_length=1, default='N')
    ordPrtText = models.CharField(max_length=100, null=True)
    kdsSendYn = models.CharField(max_length=1, default='N')
    remainCount = models.IntegerField(default=1)
    insDt = models.DateTimeField(default=timezone.now, null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=timezone.now, null=True)
    modUs = models.CharField(max_length=30,  null=True)

    def __str__(self):
        return self.itemName


class Set(models.Model):
    setItemCd = models.ForeignKey('items.Item', on_delete=models.CASCADE, default=1)
    seq = models.IntegerField(default=1)
    subItemCd = models.CharField(max_length=20, default='00000')
    subItemQty = models.IntegerField(default=1)
    subItemPrice = models.FloatField(default=0.0)
    insDt = models.DateTimeField(default=timezone.now, null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=timezone.now, null=True)
    modUs = models.CharField(max_length=30,  null=True)


class SetOpt(models.Model):
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    subItemCd = models.ForeignKey('items.Item', on_delete=models.CASCADE, default=1)
    changeItemCd = models.CharField(max_length=20, default='00000')
    insDt = models.DateTimeField(default=timezone.now, null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=timezone.now, null=True)
    modUs = models.CharField(max_length=30,  null=True)


class ItemAdd(models.Model):
    itemCd = models.ForeignKey('items.Item', on_delete=models.CASCADE, default=1)
    itemAddCd = models.ManyToManyField('items.Item', related_name='itemAddCd')
    itemSort = models.IntegerField(default=0)
    insDt = models.DateTimeField(default=timezone.now, null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=timezone.now, null=True)
    modUs = models.CharField(max_length=30,  null=True)


class AddCat(models.Model):
    addCatCd = models.CharField(max_length=1, default='00000')
    addCatName = models.CharField(max_length=20, default='')
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=timezone.now, null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=timezone.now, null=True)
    modUs = models.CharField(max_length=30,  null=True)


class Add(models.Model):
    addCatCd = models.ForeignKey('items.AddCat', on_delete=models.CASCADE, default=1)
    addItemCd = models.ForeignKey('items.Item', on_delete=models.CASCADE, default=1)
    insDt = models.DateTimeField(default=timezone.now, null=True)
    insUs = models.CharField(max_length=30,  null=True)
    modDt = models.DateTimeField(default=timezone.now, null=True)
    modUs = models.CharField(max_length=30,  null=True)
