# Generated by Django 3.1.3 on 2020-11-18 14:02

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kdses', '0008_auto_20201117_1438'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kdsdetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 443081), null=True),
        ),
        migrations.AlterField(
            model_name='kdsdetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 443113), null=True),
        ),
        migrations.AlterField(
            model_name='kdsheader',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 442433), null=True),
        ),
        migrations.AlterField(
            model_name='kdsheader',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 442544), null=True),
        ),
        migrations.AlterField(
            model_name='master',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 440921), null=True),
        ),
        migrations.AlterField(
            model_name='master',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 440965), null=True),
        ),
        migrations.AlterField(
            model_name='setmaster',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 441718), null=True),
        ),
        migrations.AlterField(
            model_name='setmaster',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 18, 23, 2, 26, 441755), null=True),
        ),
    ]
