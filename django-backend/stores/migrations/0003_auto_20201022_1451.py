# Generated by Django 3.1.2 on 2020-10-22 05:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0002_auto_20201021_2300'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 51, 55, 653845), null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 51, 55, 653913), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 51, 55, 652094)),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 51, 55, 652137)),
        ),
    ]
