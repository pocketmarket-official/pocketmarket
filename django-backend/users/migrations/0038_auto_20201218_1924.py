# Generated by Django 3.1.4 on 2020-12-18 10:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0037_auto_20201218_1909'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 17, 536146)),
        ),
        migrations.AlterField(
            model_name='business',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 17, 536180)),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 17, 535386)),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 17, 535424)),
        ),
        migrations.AlterField(
            model_name='point',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 17, 534681), null=True),
        ),
        migrations.AlterField(
            model_name='point',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 17, 534728), null=True),
        ),
        migrations.AlterField(
            model_name='question',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 17, 537028)),
        ),
        migrations.AlterField(
            model_name='question',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 17, 537064)),
        ),
    ]