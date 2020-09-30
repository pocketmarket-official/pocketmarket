"""
configure admin panel related to items models
"""
from django.contrib import admin
from items import models


@admin.register(models.Item)
class ItemAdmin(admin.ModelAdmin):

    """ Item Admin """

    pass

@admin.register(models.Set)
class SetAdmin(admin.ModelAdmin):

    """ Set Admin """

    pass

@admin.register(models.SetOpt)
class SetOptAdmin(admin.ModelAdmin):

    """ SetOpt Admin """

    pass

@admin.register(models.ItemAdd)
class ItemAddAdmin(admin.ModelAdmin):

    """ ItemAdd Admin """

    pass

@admin.register(models.AddCat)
class AddCatAdmin(admin.ModelAdmin):

    """ AddCat Admin """

    pass

@admin.register(models.Add)
class AddAdmin(admin.ModelAdmin):

    """ Add Admin """

    pass
