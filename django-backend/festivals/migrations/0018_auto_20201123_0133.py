# Generated by Django 3.1.3 on 2020-11-23 01:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('festivals', '0017_auto_20201122_1717'),
    ]

    operations = [
        migrations.AlterField(
            model_name='festival',
            name='insDt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 11, 23, 1, 33, 51, 452406), null=True),
        ),
        migrations.AlterField(
            model_name='festival',
            name='modDt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 11, 23, 1, 33, 51, 452445), null=True),
        ),
        migrations.AlterField(
            model_name='join',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 453348)),
        ),
        migrations.AlterField(
            model_name='join',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 453468)),
        ),
    ]