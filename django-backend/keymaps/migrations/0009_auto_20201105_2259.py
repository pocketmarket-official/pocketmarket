# Generated by Django 3.1.2 on 2020-11-05 13:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keymaps', '0008_auto_20201029_1652'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 59, 50, 210188)),
        ),
        migrations.AlterField(
            model_name='keymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 59, 50, 210252)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 59, 50, 205614)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 59, 50, 205685)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 59, 50, 207011)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 59, 50, 207077)),
        ),
    ]