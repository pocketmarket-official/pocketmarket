# Generated by Django 3.1.1 on 2020-09-30 08:36

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cprts', '0007_auto_20200930_1703'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cprt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 17, 36, 5, 409150)),
        ),
        migrations.AlterField(
            model_name='cprt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 17, 36, 5, 409188)),
        ),
        migrations.AlterField(
            model_name='group',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 17, 36, 5, 409791)),
        ),
        migrations.AlterField(
            model_name='group',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 17, 36, 5, 409826)),
        ),
        migrations.AlterField(
            model_name='relation',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 17, 36, 5, 410379)),
        ),
        migrations.AlterField(
            model_name='relation',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 17, 36, 5, 410417)),
        ),
    ]
