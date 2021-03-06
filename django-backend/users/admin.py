"""
configure admin panel related to users models
"""
from django.contrib import admin
from users import models


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):

    """ User Admin """

    pass


@admin.register(models.Point)
class PointAdmin(admin.ModelAdmin):

    """ Point Admin """

    pass


@admin.register(models.MyPlace)
class MyPlaceAdmin(admin.ModelAdmin):

    """ MyPlace Admin """

    pass

@admin.register(models.Business)
class BusinessAdmin(admin.ModelAdmin):

    """ Business Admin """

    pass

@admin.register(models.Question)
class QuestionAdmin(admin.ModelAdmin):

    """ Question Admin """

    pass
