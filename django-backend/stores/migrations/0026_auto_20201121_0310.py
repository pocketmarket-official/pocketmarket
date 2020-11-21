# Generated by Django 3.1.3 on 2020-11-20 18:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0025_auto_20201121_0235'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 105184), null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 105220), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 11, 21, 3, 10, 33, 104157), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 11, 21, 3, 10, 33, 104201), null=True),
        ),
        migrations.AlterField(
            model_name='storedic',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 106645), null=True),
        ),
        migrations.AlterField(
            model_name='storedic',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 106683), null=True),
        ),
        migrations.AlterField(
            model_name='storelike',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 107246), null=True),
        ),
        migrations.AlterField(
            model_name='storelike',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 107287), null=True),
        ),
    ]
