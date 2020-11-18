# Generated by Django 3.1.3 on 2020-11-16 13:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0015_auto_20201116_2158'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profileImage',
            field=models.ImageField(null=True, upload_to='image'),
        ),
        migrations.AlterField(
            model_name='business',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 22, 25, 0, 113255)),
        ),
        migrations.AlterField(
            model_name='business',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 22, 25, 0, 113306)),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 22, 25, 0, 112385)),
        ),
        migrations.AlterField(
            model_name='myplace',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 22, 25, 0, 112426)),
        ),
        migrations.AlterField(
            model_name='point',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 22, 25, 0, 110909), null=True),
        ),
        migrations.AlterField(
            model_name='point',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 22, 25, 0, 111023), null=True),
        ),
    ]