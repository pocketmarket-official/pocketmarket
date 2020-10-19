# Generated by Django 3.1.2 on 2020-10-15 05:02

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
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 888578), null=True),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 888611), null=True),
        ),
        migrations.AlterField(
            model_name='cashlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 887631), null=True),
        ),
        migrations.AlterField(
            model_name='cashlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 887664), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 892643), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 892682), null=True),
        ),
        migrations.AlterField(
            model_name='etclog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 889789), null=True),
        ),
        migrations.AlterField(
            model_name='etclog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 889855), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 891589), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 891623), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 886763), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 886806), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 892150), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 892185), null=True),
        ),
        migrations.AlterField(
            model_name='standardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 890813), null=True),
        ),
        migrations.AlterField(
            model_name='standardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 2, 50, 890854), null=True),
        ),
    ]