# Generated by Django 3.1.1 on 2020-09-29 16:35

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0006_auto_20200930_0128'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 1, 35, 28, 839140)),
        ),
        migrations.AlterField(
            model_name='item',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 1, 35, 28, 839178)),
        ),
        migrations.CreateModel(
            name='ItemSet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seq', models.IntegerField(default=1)),
                ('subItemCd', models.CharField(default='00000', max_length=20)),
                ('subItemQty', models.IntegerField(default=1)),
                ('subItemPric', models.FloatField(default=0.0)),
                ('insDt', models.DateTimeField(default=datetime.datetime(2020, 9, 30, 1, 35, 28, 839841))),
                ('insUs', models.CharField(default='defaultValue', max_length=30)),
                ('modDt', models.DateTimeField(default=datetime.datetime(2020, 9, 30, 1, 35, 28, 839875))),
                ('modUs', models.CharField(default='defaultValue', max_length=30)),
                ('setItemCd', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='items.item')),
            ],
        ),
    ]