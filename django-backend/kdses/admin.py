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

@admin.register(models.KdsHeader)
class KdsHeaderAdmin(admin.ModelAdmin):

    """ KdsHeader Admin """

    pass

@admin.register(models.KdsDetail)
class KdsDetailAdmin(admin.ModelAdmin):

    """ KdsDetail Admin """

    pass
