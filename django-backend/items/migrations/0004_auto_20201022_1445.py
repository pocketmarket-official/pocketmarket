# Generated by Django 3.1.2 on 2020-10-22 05:45

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0003_auto_20201021_2301'),
    ]

    operations = [
        migrations.AlterField(
            model_name='add',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 366675), null=True),
        ),
        migrations.AlterField(
            model_name='add',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 366710), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 366233), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 366266), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 364025), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 364055), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 365752), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 365783), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 364620), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 364652), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 365222), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 365254), null=True),
        ),
    ]