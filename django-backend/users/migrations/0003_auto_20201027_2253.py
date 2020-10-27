# Generated by Django 3.1.2 on 2020-10-27 13:53

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_point'),
    ]

    operations = [
        migrations.AlterField(
            model_name='point',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 27, 22, 53, 49, 494200), null=True),
        ),
        migrations.AlterField(
            model_name='point',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 27, 22, 53, 49, 494245), null=True),
        ),
        migrations.CreateModel(
            name='MyPlace',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seq', models.IntegerField(default=1)),
                ('addrName', models.CharField(max_length=50, null=True)),
                ('addr1', models.CharField(max_length=200, null=True)),
                ('addr2', models.CharField(max_length=200, null=True)),
                ('oldAddr', models.CharField(max_length=200, null=True)),
                ('xPosition', models.FloatField(null=True)),
                ('yPosition', models.FloatField(null=True)),
                ('defaultYn', models.CharField(default='N', max_length=1)),
                ('deleteYn', models.CharField(default='N', max_length=1)),
                ('insDt', models.DateTimeField(default=datetime.datetime(2020, 10, 27, 22, 53, 49, 494897))),
                ('insUs', models.CharField(default='defaultValue', max_length=30)),
                ('modDt', models.DateTimeField(default=datetime.datetime(2020, 10, 27, 22, 53, 49, 494931))),
                ('modUs', models.CharField(default='defaultValue', max_length=30)),
                ('user', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
