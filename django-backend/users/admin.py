"""
configure admin panel related to users models
"""
from django.contrib import admin
from users import models


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):

    """ User Admin """

    pass


@admin.register(models.Point)
class PointAdmin(admin.ModelAdmin):

    """ Point Admin """

    pass
