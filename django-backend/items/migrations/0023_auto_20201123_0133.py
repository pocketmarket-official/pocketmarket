# Generated by Django 3.1.3 on 2020-11-23 01:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0022_auto_20201121_0940'),
    ]

    operations = [
        migrations.AlterField(
            model_name='add',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 481225), null=True),
        ),
        migrations.AlterField(
            model_name='add',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 481265), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 480722), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 480762), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 476185), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 476227), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 479304), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 479350), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 476980), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 477017), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 477590), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 1, 33, 51, 477626), null=True),
        ),
    ]
