"""
define festivals related models
"""
from django.db import models
from django.utils import timezone

class Brand(models.Model):

    """ Brand Model Definition """
    brandCd = models.CharField(max_length=17, default='00000')
    brandName = models.CharField(max_length=100, default='')
    useYn = models.CharField(max_length=17, default='Y')
    insDt = models.DateTimeField(default=timezone.now)
    insUs = models.CharField(max_length=30, null=True)
    modDt = models.DateTimeField(default=timezone.now)
    modUs = models.CharField(max_length=30, null=True)

    def __str__(self):
        return self.brandName
