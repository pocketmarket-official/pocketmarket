# Generated by Django 3.1.3 on 2020-11-23 01:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0018_auto_20201123_0105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reply',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 472570)),
        ),
        migrations.AlterField(
            model_name='reply',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 472705)),
        ),
        migrations.AlterField(
            model_name='review',
            name='insDt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 11, 23, 1, 33, 51, 470520), null=True),
        ),
        migrations.AlterField(
            model_name='review',
            name='modDt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 11, 23, 1, 33, 51, 470563), null=True),
        ),
        migrations.AlterField(
            model_name='reviewlike',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 471855)),
        ),
        migrations.AlterField(
            model_name='reviewlike',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 471894)),
        ),
    ]