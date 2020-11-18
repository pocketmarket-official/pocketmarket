# Generated by Django 3.1.3 on 2020-11-17 05:38

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('festivals', '0008_auto_20201117_1416'),
    ]

    operations = [
        migrations.AlterField(
            model_name='festival',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 87544)),
        ),
        migrations.AlterField(
            model_name='festival',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 87579)),
        ),
        migrations.AlterField(
            model_name='join',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 88111)),
        ),
        migrations.AlterField(
            model_name='join',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 88146)),
        ),
    ]