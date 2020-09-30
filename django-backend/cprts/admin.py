"""
configure admin panel related to cprts models
"""
from django.contrib import admin
from cprts import models


@admin.register(models.Master)
class CprtAdmin(admin.ModelAdmin):

    """ Festival Admin """

    pass
