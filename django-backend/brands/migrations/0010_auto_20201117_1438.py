# Generated by Django 3.1.3 on 2020-11-17 05:38

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0009_auto_20201117_1416'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 97832)),
        ),
        migrations.AlterField(
            model_name='brand',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 97862)),
        ),
    ]