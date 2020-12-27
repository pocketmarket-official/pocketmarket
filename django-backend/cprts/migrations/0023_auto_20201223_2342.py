# Generated by Django 3.1.4 on 2020-12-23 14:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cprts', '0022_auto_20201218_1928'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cprt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 23, 23, 42, 40, 409868)),
        ),
        migrations.AlterField(
            model_name='cprt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 23, 23, 42, 40, 409916)),
        ),
        migrations.AlterField(
            model_name='group',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 23, 23, 42, 40, 410865)),
        ),
        migrations.AlterField(
            model_name='group',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 23, 23, 42, 40, 410904)),
        ),
        migrations.AlterField(
            model_name='relation',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 23, 23, 42, 40, 411473)),
        ),
        migrations.AlterField(
            model_name='relation',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 23, 23, 42, 40, 411519)),
        ),
    ]