# Generated by Django 3.1.1 on 2020-09-30 04:31

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0024_auto_20200930_1331'),
        ('cprts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cprt',
            name='cprtCd',
            field=models.CharField(default='000', max_length=5),
        ),
        migrations.AddField(
            model_name='cprt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 13, 31, 35, 969862)),
        ),
        migrations.AddField(
            model_name='cprt',
            name='insUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AddField(
            model_name='cprt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 13, 31, 35, 969896)),
        ),
        migrations.AddField(
            model_name='cprt',
            name='modUs',
            field=models.CharField(default='defaultValue', max_length=30),
        ),
        migrations.AddField(
            model_name='cprt',
            name='storeCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store'),
        ),
        migrations.AddField(
            model_name='cprt',
            name='useYn',
            field=models.CharField(default='Y', max_length=1),
        ),
    ]