# Generated by Django 3.1.3 on 2020-11-17 05:38

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0017_auto_20201117_1416'),
    ]

    operations = [
        migrations.AlterField(
            model_name='add',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 106274), null=True),
        ),
        migrations.AlterField(
            model_name='add',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 106309), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 105864), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 105894), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 103192), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 103221), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 104768), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 104800), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 103754), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 103784), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 104258), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 104288), null=True),
        ),
    ]
