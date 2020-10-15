# Generated by Django 3.1.2 on 2020-10-15 05:22

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
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 38365), null=True),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 38400), null=True),
        ),
        migrations.AlterField(
            model_name='cashlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 37451), null=True),
        ),
        migrations.AlterField(
            model_name='cashlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 37487), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 41900), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 41937), null=True),
        ),
        migrations.AlterField(
            model_name='etclog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 39320), null=True),
        ),
        migrations.AlterField(
            model_name='etclog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 39358), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 40748), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 40784), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 36463), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 36530), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 41306), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 41343), null=True),
        ),
        migrations.AlterField(
            model_name='standardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 40047), null=True),
        ),
        migrations.AlterField(
            model_name='standardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 15, 14, 22, 50, 40083), null=True),
        ),
    ]
