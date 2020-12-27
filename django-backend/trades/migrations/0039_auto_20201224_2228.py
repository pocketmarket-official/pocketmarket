# Generated by Django 3.1.4 on 2020-12-24 13:28

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0038_auto_20201224_2227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 872616), null=True),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 872649), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 874536), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 874569), null=True),
        ),
        migrations.AlterField(
            model_name='errorlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 875099), null=True),
        ),
        migrations.AlterField(
            model_name='errorlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 875131), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 873485), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 873519), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 871447), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 871490), null=True),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 869692), null=True),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 869734), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 874026), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 24, 22, 28, 5, 874059), null=True),
        ),
    ]