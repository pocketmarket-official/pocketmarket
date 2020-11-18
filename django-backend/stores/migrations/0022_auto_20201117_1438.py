# Generated by Django 3.1.3 on 2020-11-17 05:38

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0021_auto_20201117_1416'),
    ]

    operations = [
        migrations.AlterField(
            model_name='funset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 95325), null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 95353), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 94576), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 94605), null=True),
        ),
        migrations.AlterField(
            model_name='storedic',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 96479), null=True),
        ),
        migrations.AlterField(
            model_name='storedic',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 96510), null=True),
        ),
        migrations.AlterField(
            model_name='storelike',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 96995), null=True),
        ),
        migrations.AlterField(
            model_name='storelike',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 17, 14, 38, 56, 97025), null=True),
        ),
    ]
