"""
configure admin panel related to stores models
"""
from django.contrib import admin
from stores import models


@admin.register(models.Store)
class StoreAdmin(admin.ModelAdmin):

    """ Store Admin """

    pass
