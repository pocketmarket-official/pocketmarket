# Generated by Django 3.1.3 on 2020-11-18 14:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('festivals', '0010_auto_20201118_2302'),
    ]

    operations = [
        migrations.AlterField(
            model_name='festival',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 5, 3, 331802)),
        ),
        migrations.AlterField(
            model_name='festival',
            name='insUs',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='festival',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 5, 3, 331884)),
        ),
        migrations.AlterField(
            model_name='festival',
            name='modUs',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='join',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 5, 3, 333119)),
        ),
        migrations.AlterField(
            model_name='join',
            name='insUs',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='join',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 5, 3, 333204)),
        ),
        migrations.AlterField(
            model_name='join',
            name='modUs',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
