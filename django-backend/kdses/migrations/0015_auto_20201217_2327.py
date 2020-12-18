# Generated by Django 3.1.4 on 2020-12-17 14:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kdses', '0014_auto_20201212_1727'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kdsdetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 17, 23, 27, 19, 4588), null=True),
        ),
        migrations.AlterField(
            model_name='kdsdetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 17, 23, 27, 19, 4629), null=True),
        ),
        migrations.AlterField(
            model_name='kdsheader',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 17, 23, 27, 19, 3913), null=True),
        ),
        migrations.AlterField(
            model_name='kdsheader',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 17, 23, 27, 19, 3952), null=True),
        ),
        migrations.AlterField(
            model_name='master',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 17, 23, 27, 19, 2165), null=True),
        ),
        migrations.AlterField(
            model_name='master',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 17, 23, 27, 19, 2217), null=True),
        ),
        migrations.AlterField(
            model_name='setmaster',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 17, 23, 27, 19, 3120), null=True),
        ),
        migrations.AlterField(
            model_name='setmaster',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 17, 23, 27, 19, 3155), null=True),
        ),
    ]
