# Generated by Django 3.1.1 on 2020-09-30 10:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0035_auto_20200930_1951'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 52, 7, 877791)),
        ),
        migrations.AlterField(
            model_name='funset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 52, 7, 877825)),
        ),
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 52, 7, 876720)),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 52, 7, 876757)),
        ),
    ]
