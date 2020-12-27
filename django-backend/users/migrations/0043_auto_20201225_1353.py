# Generated by Django 3.1.4 on 2020-12-25 13:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0042_auto_20201223_2342'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 280334)),
        ),
        migrations.AlterField(
            model_name='business',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 280381)),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 278531)),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 278599)),
        ),
        migrations.AlterField(
            model_name='point',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 277085), null=True),
        ),
        migrations.AlterField(
            model_name='point',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 277164), null=True),
        ),
        migrations.AlterField(
            model_name='question',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 281470)),
        ),
        migrations.AlterField(
            model_name='question',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 281517)),
        ),
    ]