# Generated by Django 3.1.3 on 2020-11-20 18:10

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0026_auto_20201121_0310'),
        ('users', '0021_auto_20201120_2230'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 114258)),
        ),
        migrations.AlterField(
            model_name='business',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 114294)),
        ),
        migrations.AlterField(
            model_name='business',
            name='store',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='stores', to='stores.store'),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 113416)),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 113450)),
        ),
        migrations.AlterField(
            model_name='point',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 112639), null=True),
        ),
        migrations.AlterField(
            model_name='point',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 3, 10, 33, 112691), null=True),
        ),
    ]