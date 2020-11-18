# Generated by Django 3.1.3 on 2020-11-18 14:02

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keymaps', '0011_auto_20201117_1438'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 429712)),
        ),
        migrations.AlterField(
            model_name='keymap',
            name='insUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AlterField(
            model_name='keymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 429747)),
        ),
        migrations.AlterField(
            model_name='keymap',
            name='modUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 428170)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='insUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 428205)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='modUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 428942)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='insUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 428978)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='modUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
    ]
