# Generated by Django 3.1.2 on 2020-10-04 05:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0043_auto_20201004_1429'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funset',
            name='alrPntFg',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='alrTy',
            field=models.CharField(max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 29, 50, 378219)),
        ),
        migrations.AlterField(
            model_name='funset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 29, 50, 378267)),
        ),
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 29, 50, 376596)),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 4, 14, 29, 50, 376637)),
        ),
    ]
