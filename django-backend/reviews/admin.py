"""
configure admin panel related to reviews models
"""
from django.contrib import admin
from reviews import models


@admin.register(models.Review)
class ReviewAdmin(admin.ModelAdmin):

    """ Review Admin """

    pass

@admin.register(models.ReviewLike)
class ReviewLikeAdmin(admin.ModelAdmin):

    """ ReviewLike Admin """

    pass


@admin.register(models.ReviewImage)
class ReviewImageAdmin(admin.ModelAdmin):

    """ ReviewImage Admin """

    pass


@admin.register(models.Reply)
class ReplyAdmin(admin.ModelAdmin):

    """ Reply Admin """

    pass

