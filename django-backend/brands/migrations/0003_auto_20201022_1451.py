# Generated by Django 3.1.2 on 2020-10-22 05:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0002_auto_20201021_2300'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 51, 55, 658158)),
        ),
        migrations.AlterField(
            model_name='brand',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 51, 55, 658201)),
        ),
    ]
