"""
define users related models
"""
from django.db import models


class User(models.Model):

    """ User Model Definition """

    userName = models.CharField(max_length=50)
