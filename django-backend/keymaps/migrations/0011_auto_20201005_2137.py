# Generated by Django 3.1.2 on 2020-10-05 12:37

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('keymaps', '0010_auto_20201004_1703'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 37, 21, 497350)),
        ),
        migrations.AlterField(
            model_name='keymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 37, 21, 497383)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 37, 21, 494923)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 37, 21, 494960)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 37, 21, 496539)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='keymapCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='keymaps.storekeymap'),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 37, 21, 496575)),
        ),
    ]