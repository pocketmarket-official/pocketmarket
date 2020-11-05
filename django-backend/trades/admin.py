"""
configure admin panel related to brands models
"""
from django.contrib import admin
from trades import models


@admin.register(models.SaleHeader)
class SaleHeaderAdmin(admin.ModelAdmin):

    """ SaleHeader Admin """

    pass


@admin.register(models.SaleDetail)
class SaleDetailAdmin(admin.ModelAdmin):

    """ SaleDetail Admin """

    pass

#
# @admin.register(models.CashLog)
# class CashLogAdmin(admin.ModelAdmin):
#
#     """ CashLog Admin """
#
#     pass

@admin.register(models.CardLog)
class CardLogAdmin(admin.ModelAdmin):

    """ CardLog Admin """

    pass

# @admin.register(models.EtcLog)
# class EtcLogAdmin(admin.ModelAdmin):
#
#     """ EtcLog Admin """
#
#     pass
#
# @admin.register(models.StandardLog)
# class StandardLogAdmin(admin.ModelAdmin):
#
#     """ StandardLog Admin """
#
#     pass

@admin.register(models.PurchaseLog)
class PurchaseLogAdmin(admin.ModelAdmin):

    """ PurchaseLog Admin """

    pass

@admin.register(models.SoldoutLog)
class SoldoutLogAdmin(admin.ModelAdmin):

    """ SoldoutLog Admin """

    pass

@admin.register(models.CornerStateLog)
class CornerStateLogAdmin(admin.ModelAdmin):

    """ CornerStateLog Admin """

    pass

