"""
configure admin panel related to storeLikes models
"""
from django.contrib import admin
from storeLikes import models


@admin.register(models.StoreLike)
class StoreLikesAdmin(admin.ModelAdmin):

    """ storeLikes Admin """

    pass
