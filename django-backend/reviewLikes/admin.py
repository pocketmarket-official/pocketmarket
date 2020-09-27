"""
configure admin panel related to reviewLikes models
"""
from django.contrib import admin
from reviewLikes import models


@admin.register(models.ReviewLike)
class ReviewLikeAdmin(admin.ModelAdmin):

    """ ReviewLike Admin """

    pass
