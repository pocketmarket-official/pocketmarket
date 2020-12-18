# Generated by Django 3.1.4 on 2020-12-18 10:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0036_auto_20201217_2327'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 9, 25, 722646), null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 9, 25, 722682), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 12, 18, 19, 9, 25, 721593), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 12, 18, 19, 9, 25, 721642), null=True),
        ),
        migrations.AlterField(
            model_name='storedic',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 9, 25, 723985), null=True),
        ),
        migrations.AlterField(
            model_name='storedic',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 9, 25, 724021), null=True),
        ),
        migrations.AlterField(
            model_name='storelike',
            name='insDt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 12, 18, 19, 9, 25, 724568), null=True),
        ),
        migrations.AlterField(
            model_name='storelike',
            name='modDt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 12, 18, 19, 9, 25, 724608), null=True),
        ),
    ]
