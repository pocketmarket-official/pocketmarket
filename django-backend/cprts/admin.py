"""
configure admin panel related to cprts models
"""
from django.contrib import admin
from cprts import models


@admin.register(models.Cprt)
class CprtAdmin(admin.ModelAdmin):

    """ Cprt Admin """

    pass


@admin.register(models.Group)
class GroupAdmin(admin.ModelAdmin):

    """ Group Admin """

    pass


@admin.register(models.Relation)
class RelationAdmin(admin.ModelAdmin):

    """ Relation Admin """

    pass
