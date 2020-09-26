"""
define festivals related models
"""
from django.db import models


class Festival(models.Model):

    """ Festival Model Definition """

    festivalName = models.CharField(max_length=50)
