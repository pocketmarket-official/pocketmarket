# Generated by Django 3.1.1 on 2020-09-29 16:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0016_auto_20200930_0135'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 1, 42, 18, 952799)),
        ),
        migrations.AlterField(
            model_name='brand',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 1, 42, 18, 952846)),
        ),
    ]