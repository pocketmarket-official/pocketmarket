# Generated by Django 3.1.1 on 2020-09-30 10:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('festivals', '0009_auto_20200930_1951'),
    ]

    operations = [
        migrations.AlterField(
            model_name='festival',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 51, 48, 921393)),
        ),
        migrations.AlterField(
            model_name='festival',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 51, 48, 921435)),
        ),
        migrations.AlterField(
            model_name='join',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 51, 48, 922236)),
        ),
        migrations.AlterField(
            model_name='join',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 51, 48, 922278)),
        ),
    ]
