"""
configure admin panel related to storeDics models
"""
from django.contrib import admin
from storeDics import models


@admin.register(models.StoreDic)
class StoreDicAdmin(admin.ModelAdmin):

    """ StoreDic Admin """

    pass
