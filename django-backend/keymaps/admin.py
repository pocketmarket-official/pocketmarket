"""
configure admin panel related to keymaps models
"""
from django.contrib import admin
from keymaps import models


@admin.register(models.StoreKeymap)
class StoreKeymapAdmin(admin.ModelAdmin):

    """ StoreKeymap Admin """

    pass


@admin.register(models.TouchGroup)
class TouchGroupAdmin(admin.ModelAdmin):

    """ TouchGroup Admin """

    pass


@admin.register(models.Keymap)
class KeymapAdmin(admin.ModelAdmin):

    """ Keymap Admin """

    pass
