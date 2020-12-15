# Generated by Django 3.1.3 on 2020-11-23 01:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keymaps', '0015_auto_20201121_0940'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 490660)),
        ),
        migrations.AlterField(
            model_name='keymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 490693)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 489018)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 489058)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 489789)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 489824)),
        ),
    ]