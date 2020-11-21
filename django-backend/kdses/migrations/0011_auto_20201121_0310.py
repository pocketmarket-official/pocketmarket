# Generated by Django 3.1.3 on 2020-11-20 18:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kdses', '0010_auto_20201118_2305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kdsdetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 142269), null=True),
        ),
        migrations.AlterField(
            model_name='kdsdetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 142308), null=True),
        ),
        migrations.AlterField(
            model_name='kdsheader',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 141654), null=True),
        ),
        migrations.AlterField(
            model_name='kdsheader',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 141692), null=True),
        ),
        migrations.AlterField(
            model_name='master',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 140054), null=True),
        ),
        migrations.AlterField(
            model_name='master',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 140104), null=True),
        ),
        migrations.AlterField(
            model_name='setmaster',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 140852), null=True),
        ),
        migrations.AlterField(
            model_name='setmaster',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 140887), null=True),
        ),
    ]