# Generated by Django 3.1.2 on 2020-11-05 13:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0011_auto_20201105_2252'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 55, 53, 859951), null=True),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 55, 53, 859994), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 55, 53, 864343), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 55, 53, 864410), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 55, 53, 861159), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 55, 53, 861223), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 55, 53, 858367), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 55, 53, 858405), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 55, 53, 863197), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 22, 55, 53, 863242), null=True),
        ),
    ]
