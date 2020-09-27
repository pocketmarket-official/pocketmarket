"""
configure admin panel related to replies models
"""
from django.contrib import admin
from replies import models


@admin.register(models.Reply)
class ReplyAdmin(admin.ModelAdmin):

    """ Reply Admin """

    pass
