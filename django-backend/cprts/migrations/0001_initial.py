# Generated by Django 3.1.2 on 2020-10-21 14:00

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cprt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cprtCd', models.CharField(default='000', max_length=5)),
                ('cprtName', models.CharField(default='', max_length=50)),
                ('useYn', models.CharField(default='Y', max_length=1)),
                ('insDt', models.DateTimeField(default=datetime.datetime(2020, 10, 21, 23, 0, 19, 377800))),
                ('insUs', models.CharField(default='defaultValue', max_length=30)),
                ('modDt', models.DateTimeField(default=datetime.datetime(2020, 10, 21, 23, 0, 19, 377837))),
                ('modUs', models.CharField(default='defaultValue', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cprtGroupCd', models.CharField(default='000', max_length=5)),
                ('cprtGroupName', models.CharField(default='', max_length=50)),
                ('useYn', models.CharField(default='Y', max_length=1)),
                ('insDt', models.DateTimeField(default=datetime.datetime(2020, 10, 21, 23, 0, 19, 378403))),
                ('insUs', models.CharField(default='defaultValue', max_length=30)),
                ('modDt', models.DateTimeField(default=datetime.datetime(2020, 10, 21, 23, 0, 19, 378436))),
                ('modUs', models.CharField(default='defaultValue', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Relation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('insDt', models.DateTimeField(default=datetime.datetime(2020, 10, 21, 23, 0, 19, 378978))),
                ('insUs', models.CharField(default='defaultValue', max_length=30)),
                ('modDt', models.DateTimeField(default=datetime.datetime(2020, 10, 21, 23, 0, 19, 379016))),
                ('modUs', models.CharField(default='defaultValue', max_length=30)),
                ('cprtCd', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='cprts.cprt')),
                ('cprtGroupCd', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='cprts.group')),
            ],
        ),
    ]
