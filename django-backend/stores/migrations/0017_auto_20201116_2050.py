# Generated by Django 3.1.3 on 2020-11-16 11:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0016_auto_20201115_2135'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 20, 50, 53, 348897), null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 20, 50, 53, 348936), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 20, 50, 53, 347083), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 20, 50, 53, 347123), null=True),
        ),
        migrations.AlterField(
            model_name='storedic',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 20, 50, 53, 350573), null=True),
        ),
        migrations.AlterField(
            model_name='storedic',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 20, 50, 53, 350618), null=True),
        ),
    ]
