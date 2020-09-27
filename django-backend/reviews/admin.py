"""
configure admin panel related to reviews models
"""
from django.contrib import admin
from reviews import models


@admin.register(models.Review)
class ReviewAdmin(admin.ModelAdmin):

    """ Review Admin """

    pass
