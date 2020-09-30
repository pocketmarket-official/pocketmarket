"""
define keymaps related models
"""
from django.db import models


class Keymap(models.Model):

    """ Keymap Model Definition """

    keymapName = models.CharField(max_length=50)
