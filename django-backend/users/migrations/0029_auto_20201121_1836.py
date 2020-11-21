# Generated by Django 3.1.3 on 2020-11-21 09:36

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0028_auto_20201121_1825'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 36, 26, 477660)),
        ),
        migrations.AlterField(
            model_name='business',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 36, 26, 477693)),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 36, 26, 476910)),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 36, 26, 476943)),
        ),
        migrations.AlterField(
            model_name='point',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 36, 26, 476228), null=True),
        ),
        migrations.AlterField(
            model_name='point',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 36, 26, 476276), null=True),
        ),
        migrations.AlterField(
            model_name='question',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 36, 26, 478470)),
        ),
        migrations.AlterField(
            model_name='question',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 36, 26, 478506)),
        ),
    ]
