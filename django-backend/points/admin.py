"""
configure admin panel related to points models
"""
from django.contrib import admin
from points import models


@admin.register(models.Point)
class PointAdmin(admin.ModelAdmin):

    """ Point Admin """

    pass
