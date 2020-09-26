"""
configure admin panel related to festivals models
"""
from django.contrib import admin
from festivals import models


@admin.register(models.Festival)
class FestivalAdmin(admin.ModelAdmin):

    """ Festival Admin """

    pass
