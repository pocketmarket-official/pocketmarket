# Generated by Django 3.1.3 on 2020-11-21 09:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0015_auto_20201121_0940'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='img1',
            field=models.ImageField(null=True, upload_to='images/review'),
        ),
        migrations.AddField(
            model_name='review',
            name='img2',
            field=models.ImageField(null=True, upload_to='images/review'),
        ),
        migrations.AddField(
            model_name='review',
            name='img3',
            field=models.ImageField(null=True, upload_to='images/review'),
        ),
        migrations.AddField(
            model_name='review',
            name='img4',
            field=models.ImageField(null=True, upload_to='images/review'),
        ),
        migrations.AddField(
            model_name='review',
            name='img5',
            field=models.ImageField(null=True, upload_to='images/review'),
        ),
        migrations.AlterField(
            model_name='reply',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 43, 17, 801932)),
        ),
        migrations.AlterField(
            model_name='reply',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 43, 17, 801973)),
        ),
        migrations.AlterField(
            model_name='review',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 43, 17, 799954)),
        ),
        migrations.AlterField(
            model_name='review',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 43, 17, 799995)),
        ),
        migrations.AlterField(
            model_name='reviewlike',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 43, 17, 801218)),
        ),
        migrations.AlterField(
            model_name='reviewlike',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 21, 18, 43, 17, 801263)),
        ),
        migrations.DeleteModel(
            name='ReviewImage',
        ),
    ]