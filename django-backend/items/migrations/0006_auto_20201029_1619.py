# Generated by Django 3.1.2 on 2020-10-29 07:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0005_merge_20201022_1549'),
    ]

    operations = [
        migrations.AlterField(
            model_name='add',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 567160), null=True),
        ),
        migrations.AlterField(
            model_name='add',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 567202), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 566623), null=True),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 566664), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 562118), null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 562160), null=True),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 564128), null=True),
        ),
        migrations.RemoveField(
            model_name='itemadd',
            name='itemAddCd',
        ),
        migrations.AddField(
            model_name='itemadd',
            name='itemAddCd',
            field=models.ManyToManyField(related_name='itemAddCd', to='items.Item'),
        ),
        migrations.AlterField(
            model_name='itemadd',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 564167), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 562907), null=True),
        ),
        migrations.AlterField(
            model_name='set',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 562948), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 563533), null=True),
        ),
        migrations.AlterField(
            model_name='setopt',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 29, 16, 19, 30, 563570), null=True),
        ),
    ]