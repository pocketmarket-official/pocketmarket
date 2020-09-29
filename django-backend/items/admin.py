"""
configure admin panel related to items models
"""
from django.contrib import admin
from items import models


@admin.register(models.Item)
class ItemAdmin(admin.ModelAdmin):

    """ Item Admin """

    pass
