# Generated by Django 3.1.2 on 2020-10-29 07:50

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0009_auto_20201029_1649'),
    ]

    operations = [
        migrations.AlterField(
            model_name='add',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 970800), null=True),
        ),
        migrations.AlterField(
            model_name='add',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 970840), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 970259), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 970301), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 966269), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 966311), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 968217), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='itemAddCd',
            field=models.ManyToManyField(related_name='itemAddCd1', to='items.Item'),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='itemCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='et', to='items.item'),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 968255), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 967040), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 967079), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 967646), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 50, 55, 967686), null=True),
        ),
    ]