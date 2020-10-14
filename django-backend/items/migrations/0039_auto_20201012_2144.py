# Generated by Django 3.1.2 on 2020-10-12 12:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0038_auto_20201012_1925'),
    ]

    operations = [
        migrations.AlterField(
            model_name='add',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 906027), null=True),
        ),
        migrations.AlterField(
            model_name='add',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 906065), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 905545), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 905581), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 903090), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 903129), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 905002), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 905037), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 903873), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 903909), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 904442), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 12, 21, 44, 23, 904477), null=True),
        ),
    ]