from django.db import models

# Create your models here.

class Brand(models.Model):

    """ Brand Model Definition """

    brandName = models.CharField(max_length=50)
