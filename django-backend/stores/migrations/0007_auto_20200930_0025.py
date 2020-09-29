# Generated by Django 3.1.1 on 2020-09-29 15:25

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0006_auto_20200930_0021'),
    ]

    operations = [
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 0, 25, 56, 760480)),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 0, 25, 56, 760525)),
        ),
        migrations.AlterField(
            model_name='storefunset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 0, 25, 56, 761582)),
        ),
        migrations.AlterField(
            model_name='storefunset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 0, 25, 56, 761620)),
        ),
        migrations.CreateModel(
            name='storePos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ordStartNo', models.CharField(default='0000', max_length=10)),
                ('ordEndNo', models.CharField(default='9999', max_length=10)),
                ('cntPayYn', models.CharField(default='N', max_length=1)),
                ('kktAlrTmplCd', models.CharField(blank=True, max_length=50)),
                ('takeOutYn', models.CharField(default='Y', max_length=1)),
                ('callNoYn', models.CharField(default='Y', max_length=1)),
                ('useYn', models.CharField(default='Y', max_length=1)),
                ('storeCd', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store')),
            ],
        ),
    ]
