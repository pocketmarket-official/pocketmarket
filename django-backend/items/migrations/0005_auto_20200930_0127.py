# Generated by Django 3.1.1 on 2020-09-29 16:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0004_auto_20200930_0125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 1, 27, 13, 11249)),
        ),
        migrations.AlterField(
            model_name='item',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 1, 27, 13, 11287)),
        ),
    ]
