# Generated by Django 3.1.1 on 2020-09-29 16:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0008_auto_20200930_0025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 1, 10, 50, 818201)),
        ),
        migrations.AlterField(
            model_name='brand',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 1, 10, 50, 818256)),
        ),
    ]
