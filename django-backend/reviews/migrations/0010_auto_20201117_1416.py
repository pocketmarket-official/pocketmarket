# Generated by Django 3.1.3 on 2020-11-17 05:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0009_auto_20201116_2358'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reply',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 16, 56, 238099)),
        ),
        migrations.AlterField(
            model_name='reply',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 16, 56, 238126)),
        ),
        migrations.AlterField(
            model_name='review',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 16, 56, 236474)),
        ),
        migrations.AlterField(
            model_name='review',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 16, 56, 236501)),
        ),
        migrations.AlterField(
            model_name='reviewimage',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 16, 56, 237544)),
        ),
        migrations.AlterField(
            model_name='reviewimage',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 16, 56, 237571)),
        ),
        migrations.AlterField(
            model_name='reviewlike',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 16, 56, 237027)),
        ),
        migrations.AlterField(
            model_name='reviewlike',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 16, 56, 237056)),
        ),
    ]
