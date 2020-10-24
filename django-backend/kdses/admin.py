"""
configure admin panel related to items models
"""
from django.contrib import admin
from kdses import models


@admin.register(models.Master)
class MasterAdmin(admin.ModelAdmin):

    """ Master Admin """

    pass

@admin.register(models.SetMaster)
class SetMasterAdmin(admin.ModelAdmin):

    """ Set Admin """

    pass
