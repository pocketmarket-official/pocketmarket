# Generated by Django 3.1.1 on 2020-09-30 07:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cprts', '0004_auto_20200930_1339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cprt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 16, 42, 20, 339902)),
        ),
        migrations.AlterField(
            model_name='cprt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 16, 42, 20, 339939)),
        ),
        migrations.AlterField(
            model_name='group',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 16, 42, 20, 339293)),
        ),
        migrations.AlterField(
            model_name='group',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 16, 42, 20, 339327)),
        ),
        migrations.AlterField(
            model_name='master',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 16, 42, 20, 338553)),
        ),
        migrations.AlterField(
            model_name='master',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 16, 42, 20, 338592)),
        ),
    ]