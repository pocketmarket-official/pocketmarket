# Generated by Django 3.1.2 on 2020-10-29 07:49

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kdses', '0002_auto_20201029_1623'),
    ]

    operations = [
        migrations.AlterField(
            model_name='master',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 49, 36, 908256), null=True),
        ),
        migrations.AlterField(
            model_name='master',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 49, 36, 908299), null=True),
        ),
        migrations.AlterField(
            model_name='setmaster',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 49, 36, 908977), null=True),
        ),
        migrations.AlterField(
            model_name='setmaster',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 49, 36, 909011), null=True),
        ),
    ]