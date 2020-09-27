"""
configure admin panel related to brands models
"""
from django.contrib import admin
from brands import models


@admin.register(models.Brand)
class BrandAdmin(admin.ModelAdmin):

    """ Brand Admin """

    pass
