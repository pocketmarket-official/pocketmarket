# Generated by Django 3.1.2 on 2020-11-07 06:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_auto_20201107_1519'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myplace',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 7, 15, 19, 49, 893917)),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 7, 15, 19, 49, 893956)),
        ),
        migrations.AlterField(
            model_name='point',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 7, 15, 19, 49, 892603), null=True),
        ),
        migrations.AlterField(
            model_name='point',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 7, 15, 19, 49, 892645), null=True),
        ),
    ]
