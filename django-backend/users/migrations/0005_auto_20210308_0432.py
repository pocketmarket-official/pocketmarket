# Generated by Django 3.1.4 on 2021-03-07 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20210308_0427'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='orderYn',
            field=models.CharField(default='Y', max_length=5),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='defaultYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='deleteYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='user',
            name='bizYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='user',
            name='guestYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='user',
            name='tmpFlag',
            field=models.CharField(default='2', max_length=5),
        ),
    ]
