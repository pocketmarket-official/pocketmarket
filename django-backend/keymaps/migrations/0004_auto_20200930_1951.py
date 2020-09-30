# Generated by Django 3.1.1 on 2020-09-30 10:51

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keymaps', '0003_auto_20200930_1951'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 51, 48, 946227)),
        ),
        migrations.AlterField(
            model_name='keymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 51, 48, 946267)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 51, 48, 943247)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 51, 48, 943284)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 51, 48, 945373)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 51, 48, 945412)),
        ),
    ]
