# Generated by Django 3.1.2 on 2020-10-05 12:38

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keymaps', '0011_auto_20201005_2137'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 38, 23, 570570)),
        ),
        migrations.AlterField(
            model_name='keymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 38, 23, 570604)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 38, 23, 567812)),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 38, 23, 567848)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='groupCd',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 38, 23, 569727)),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 5, 21, 38, 23, 569765)),
        ),
    ]
