"""
define keymaps related models
"""
from django.db import models
from django.utils import timezone

class StoreKeymap(models.Model):

    """ Keymap Model Definition """

    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    keymapCd = models.CharField(max_length=10, default='000')
    keymapName = models.CharField(max_length=30, default='')
    blankImgUrl = models.CharField(max_length=200, null=True)
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)

    def __str__(self):
        return self.keymapName

class TouchGroup(models.Model):
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    keymapCd = models.ForeignKey('keymaps.StoreKeymap', on_delete=models.CASCADE, default=1)
    touchGroupCd = models.CharField(max_length=5, default='000')
    touchGroupName = models.CharField(max_length=100, default='')
    imgUrl = models.CharField(max_length=200, null=True)
    imgUseYn = models.CharField(max_length=1, default='N')
    posPage = models.IntegerField(default=0)
    posIndex = models.IntegerField(default=0)
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)

    def __str__(self):
        return self.touchGroupName


class Keymap(models.Model):
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    keymapCd = models.ForeignKey('keymaps.StoreKeymap', on_delete=models.CASCADE, default=1)
    touchGroupCd = models.ForeignKey('keymaps.TouchGroup', on_delete=models.CASCADE, default=1)
    posPage = models.IntegerField(default=0)
    posIndex = models.IntegerField(default=0)
    itemCd = models.ForeignKey('items.Item', on_delete=models.CASCADE, default=1)
    soldoutYn = models.CharField(max_length=1, null=True)
    cprtGroupCd = models.CharField(max_length=5, null=True)
    dispYn = models.CharField(max_length=1, default='Y')
    expectCnt = models.IntegerField(default=0)
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)
