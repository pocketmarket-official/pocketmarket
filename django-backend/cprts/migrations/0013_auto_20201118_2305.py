# Generated by Django 3.1.3 on 2020-11-18 14:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cprts', '0012_auto_20201118_2302'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cprt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 5, 3, 397534)),
        ),
        migrations.AlterField(
            model_name='cprt',
            name='insUs',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='cprt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 5, 3, 397674)),
        ),
        migrations.AlterField(
            model_name='cprt',
            name='modUs',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='group',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 5, 3, 399368)),
        ),
        migrations.AlterField(
            model_name='group',
            name='insUs',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='group',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 5, 3, 399444)),
        ),
        migrations.AlterField(
            model_name='group',
            name='modUs',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='relation',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 5, 3, 402703)),
        ),
        migrations.AlterField(
            model_name='relation',
            name='insUs',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='relation',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 5, 3, 402854)),
        ),
        migrations.AlterField(
            model_name='relation',
            name='modUs',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
