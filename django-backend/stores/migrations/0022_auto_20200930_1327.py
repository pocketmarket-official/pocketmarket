# Generated by Django 3.1.1 on 2020-09-30 04:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0021_auto_20200930_1319'),
    ]

    operations = [
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 13, 27, 45, 361174)),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 13, 27, 45, 361220)),
        ),
        migrations.AlterField(
            model_name='storefunset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 13, 27, 45, 362199)),
        ),
        migrations.AlterField(
            model_name='storefunset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 13, 27, 45, 362239)),
        ),
    ]