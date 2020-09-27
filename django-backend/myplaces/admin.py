"""
configure admin panel related myplaces models
"""
from django.contrib import admin
from myplaces import models


@admin.register(models.Myplace)
class MyplaceAdmin(admin.ModelAdmin):

    """ Myplace Admin """

    pass
