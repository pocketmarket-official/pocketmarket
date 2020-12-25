# Generated by Django 3.1.4 on 2020-12-25 13:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0040_auto_20201225_0035'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 312598), null=True),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 312654), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 314884), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 314924), null=True),
        ),
        migrations.AlterField(
            model_name='errorlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 315513), null=True),
        ),
        migrations.AlterField(
            model_name='errorlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 315554), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 313694), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 313738), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 311240), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 311284), null=True),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 308635), null=True),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 308679), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 314315), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 25, 13, 53, 47, 314357), null=True),
        ),
    ]
