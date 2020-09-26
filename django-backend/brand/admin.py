from django.contrib import admin

# Register your models here.

"""
configure admin panel related to festivals models
"""
from brand import models


@admin.register(models.Brand)
class BrandAdmin(admin.ModelAdmin):

    """ Brand Admin """

    pass
