"""
configure admin panel related to keymaps models
"""
from django.contrib import admin
from keymaps import models


@admin.register(models.Keymap)
class KeymapAdmin(admin.ModelAdmin):

    """ Keymap Admin """

    pass
