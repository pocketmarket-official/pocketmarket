# Generated by Django 3.1.1 on 2020-09-30 03:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0018_auto_20200930_1255'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 12, 59, 41, 236559)),
        ),
        migrations.AlterField(
            model_name='brand',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 12, 59, 41, 236609)),
        ),
    ]