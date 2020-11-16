"""
configure admin panel related to stores models
"""
from django.contrib import admin
from stores import models


@admin.register(models.Store)
class StoreAdmin(admin.ModelAdmin):

    """ Store Admin """

    pass

@admin.register(models.Funset)
class FunsetAdmin(admin.ModelAdmin):

    """ Funset Admin """

    pass

@admin.register(models.Pos)
class PosAdmin(admin.ModelAdmin):

    """ Pos Admin """

    pass

@admin.register(models.StoreDic)
class StoreDicAdmin(admin.ModelAdmin):

    """ StoreDic Admin """

    pass

@admin.register(models.StoreLike)
class StoreLikeAdmin(admin.ModelAdmin):

    """ StoreLike Admin """

    pass
