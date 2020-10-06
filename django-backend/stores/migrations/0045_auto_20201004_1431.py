# Generated by Django 3.1.2 on 2020-10-04 05:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0044_auto_20201004_1429'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 31, 11, 432135), null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='insUs',
            field=models.CharField(default='defaultValue', max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 31, 11, 432171), null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='modUs',
            field=models.CharField(default='defaultValue', max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 31, 11, 430912)),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 31, 11, 430951)),
        ),
    ]