# Generated by Django 3.1.2 on 2020-11-05 13:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('festivals', '0006_auto_20201029_1652'),
    ]

    operations = [
        migrations.AlterField(
            model_name='festival',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 59, 50, 125088)),
        ),
        migrations.AlterField(
            model_name='festival',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 59, 50, 125159)),
        ),
        migrations.AlterField(
            model_name='join',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 59, 50, 126442)),
        ),
        migrations.AlterField(
            model_name='join',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 59, 50, 126516)),
        ),
    ]