# Generated by Django 3.1.1 on 2020-09-30 07:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0026_auto_20200930_1339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 16, 42, 20, 320628)),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 16, 42, 20, 320672)),
        ),
        migrations.AlterField(
            model_name='storefunset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 16, 42, 20, 321711)),
        ),
        migrations.AlterField(
            model_name='storefunset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 16, 42, 20, 321743)),
        ),
    ]
