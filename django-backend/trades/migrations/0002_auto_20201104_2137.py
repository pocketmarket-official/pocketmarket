# Generated by Django 3.1.2 on 2020-11-04 12:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 43864), null=True),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 43898), null=True),
        ),
        migrations.AlterField(
            model_name='cashlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 43029), null=True),
        ),
        migrations.AlterField(
            model_name='cashlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 43063), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 47099), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 47139), null=True),
        ),
        migrations.AlterField(
            model_name='etclog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 44612), null=True),
        ),
        migrations.AlterField(
            model_name='etclog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 44651), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 46036), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 46069), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 42081), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 42120), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 46590), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 46631), null=True),
        ),
        migrations.AlterField(
            model_name='standardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 45373), null=True),
        ),
        migrations.AlterField(
            model_name='standardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 4, 21, 37, 31, 45413), null=True),
        ),
    ]