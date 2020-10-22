# Generated by Django 3.1.2 on 2020-10-22 05:45

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keymaps', '0003_auto_20201021_2302'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 372512)),
        ),
        migrations.AlterField(
            model_name='keymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 372540)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 371104)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 371135)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 371727)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 22, 14, 45, 4, 371755)),
        ),
    ]
