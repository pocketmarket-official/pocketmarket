# Generated by Django 3.1.2 on 2020-10-29 07:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0006_auto_20201029_1649'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 52, 3, 938407)),
        ),
        migrations.AlterField(
            model_name='brand',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 52, 3, 938452)),
        ),
    ]
