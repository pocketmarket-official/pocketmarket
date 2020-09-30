"""
configure admin panel related to keymaps models
"""
from django.contrib import admin
from keymaps import models


@admin.register(models.StoreKeymap)
class KeymapAdmin(admin.ModelAdmin):

    """ StoreKeymap Admin """

    pass


@admin.register(models.TouchGroup)
class KeymapAdmin(admin.ModelAdmin):

    """ TouchGroup Admin """

    pass


@admin.register(models.Keymap)
class KeymapAdmin(admin.ModelAdmin):

    """ Keymap Admin """

    pass
