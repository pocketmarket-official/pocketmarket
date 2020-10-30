# Generated by Django 3.1.2 on 2020-10-29 07:23

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0003_merge_20201022_1549'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 960439), null=True),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 960472), null=True),
        ),
        migrations.AlterField(
            model_name='cashlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 959481), null=True),
        ),
        migrations.AlterField(
            model_name='cashlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 959584), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 963757), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 963791), null=True),
        ),
        migrations.AlterField(
            model_name='etclog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 961279), null=True),
        ),
        migrations.AlterField(
            model_name='etclog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 961312), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 962774), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 962807), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 958663), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 958702), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 963289), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 963323), null=True),
        ),
        migrations.AlterField(
            model_name='standardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 962111), null=True),
        ),
        migrations.AlterField(
            model_name='standardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 23, 28, 962147), null=True),
        ),
    ]
