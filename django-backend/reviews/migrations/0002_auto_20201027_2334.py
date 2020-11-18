# Generated by Django 3.1.2 on 2020-10-27 14:34

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0008_auto_20201027_2334'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='reviewName',
        ),
        migrations.AddField(
            model_name='review',
            name='billNo',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='review',
            name='context',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='review',
            name='deleteYn',
            field=models.CharField(default='N', max_length=1),
        ),
        migrations.AddField(
            model_name='review',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 27, 23, 34, 31, 536799)),
        ),
        migrations.AddField(
            model_name='review',
            name='insUs',
            field=models.CharField( max_length=30),
        ),
        migrations.AddField(
            model_name='review',
            name='likeUser',
            field=models.ManyToManyField(related_name='likeUser', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='review',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 10, 27, 23, 34, 31, 536837)),
        ),
        migrations.AddField(
            model_name='review',
            name='modUs',
            field=models.CharField( max_length=30),
        ),
        migrations.AddField(
            model_name='review',
            name='saleDt',
            field=models.CharField(max_length=8, null=True),
        ),
        migrations.AddField(
            model_name='review',
            name='storeCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store'),
        ),
        migrations.AddField(
            model_name='review',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
