"""
define replies related models
"""
from django.db import models


class Reply(models.Model):

    """ Reply Model Definition """

    ReplyName = models.CharField(max_length=50)
