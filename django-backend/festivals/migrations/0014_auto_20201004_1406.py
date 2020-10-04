# Generated by Django 3.1.2 on 2020-10-04 05:06

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('festivals', '0013_auto_20201004_0200'),
    ]

    operations = [
        migrations.AlterField(
            model_name='festival',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 6, 54, 25006)),
        ),
        migrations.AlterField(
            model_name='festival',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 6, 54, 25077)),
        ),
        migrations.AlterField(
            model_name='join',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 6, 54, 26937)),
        ),
        migrations.AlterField(
            model_name='join',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 6, 54, 27038)),
        ),
    ]
