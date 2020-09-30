# Generated by Django 3.1.1 on 2020-09-30 10:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('festivals', '0005_auto_20200930_1736'),
    ]

    operations = [
        migrations.AlterField(
            model_name='festival',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 24, 28, 97148)),
        ),
        migrations.AlterField(
            model_name='festival',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 24, 28, 97191)),
        ),
        migrations.AlterField(
            model_name='join',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 24, 28, 97997)),
        ),
        migrations.AlterField(
            model_name='join',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 24, 28, 98037)),
        ),
    ]