"""
define keymaps related models
"""
from django.db import models
from datetime import datetime


class StoreKeymap(models.Model):

    """ Keymap Model Definition """

    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    keymapCd = models.CharField(max_length=10, default='000')
    keymapName = models.CharField(max_length=30, default='')
    blankImgUrl = models.CharField(max_length=200, blank=True)
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')

class TouchGroup(models.Model):
    storeCd = models.ForeignKey('stores.Store', on_delete=models.CASCADE, default=1)
    keymapCd = models.ForeignKey('keymaps.Keymap', on_delete=models.CASCADE, default=1)
    groupCd = models.CharField(max_length=5, default='000')
    groupName = models.CharField(max_length=100, default='')
    imgUrl = models.CharField(max_length=200, blank=True)
    imgUseYn = models.CharField(max_length=1, default='N')
    posPage = models.IntegerField(default=0)
    posIndex = models.IntegerField(default=0)
    useYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=datetime.now())
    insUs = models.CharField(max_length=30, default='defaultValue')
    modDt = models.DateTimeField(default=datetime.now())
    modUs = models.CharField(max_length=30, default='defaultValue')



