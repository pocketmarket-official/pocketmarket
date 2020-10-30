# Generated by Django 3.1.2 on 2020-10-27 14:48

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0002_auto_20201027_2334'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 27, 23, 48, 55, 42837)),
        ),
        migrations.AlterField(
            model_name='review',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 27, 23, 48, 55, 42956)),
        ),
        migrations.CreateModel(
            name='ReviewImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seq', models.IntegerField(null=True)),
                ('url', models.CharField(max_length=200, null=True)),
                ('deleteYn', models.CharField(default='N', max_length=1)),
                ('insDt', models.DateTimeField(default=datetime.datetime(2020, 10, 27, 23, 48, 55, 44203))),
                ('insUs', models.CharField(default='defaultValue', max_length=30)),
                ('modDt', models.DateTimeField(default=datetime.datetime(2020, 10, 27, 23, 48, 55, 44239))),
                ('modUs', models.CharField(default='defaultValue', max_length=30)),
                ('review', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='reviews.review')),
            ],
        ),
    ]