# Generated by Django 3.1.3 on 2020-11-17 05:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0008_auto_20201105_2259'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 16, 56, 235242)),
        ),
        migrations.AlterField(
            model_name='brand',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 16, 56, 235271)),
        ),
    ]
