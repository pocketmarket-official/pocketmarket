# Generated by Django 3.1.4 on 2020-12-25 13:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cprts', '0023_auto_20201223_2342'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cprt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 299972)),
        ),
        migrations.AlterField(
            model_name='cprt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 300043)),
        ),
        migrations.AlterField(
            model_name='group',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 301245)),
        ),
        migrations.AlterField(
            model_name='group',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 301304)),
        ),
        migrations.AlterField(
            model_name='relation',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 302511)),
        ),
        migrations.AlterField(
            model_name='relation',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 302588)),
        ),
    ]
