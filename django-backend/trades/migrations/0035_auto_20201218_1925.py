# Generated by Django 3.1.4 on 2020-12-18 10:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0034_auto_20201218_1924'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 124502), null=True),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 124540), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 126451), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 126485), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 125393), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 125431), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 123304), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 123338), null=True),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 122152), null=True),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 122193), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 125950), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 12, 18, 19, 24, 59, 125988), null=True),
        ),
    ]