# Generated by Django 3.1.3 on 2020-11-18 14:02

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cprts', '0011_auto_20201117_1438'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cprt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 425712)),
        ),
        migrations.AlterField(
            model_name='cprt',
            name='insUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AlterField(
            model_name='cprt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 425746)),
        ),
        migrations.AlterField(
            model_name='cprt',
            name='modUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AlterField(
            model_name='group',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 426325)),
        ),
        migrations.AlterField(
            model_name='group',
            name='insUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AlterField(
            model_name='group',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 426359)),
        ),
        migrations.AlterField(
            model_name='group',
            name='modUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AlterField(
            model_name='relation',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 426970)),
        ),
        migrations.AlterField(
            model_name='relation',
            name='insUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AlterField(
            model_name='relation',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 427014)),
        ),
        migrations.AlterField(
            model_name='relation',
            name='modUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
    ]