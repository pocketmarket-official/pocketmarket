# Generated by Django 3.1.3 on 2020-11-16 14:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0018_auto_20201116_2345'),
    ]

    operations = [
        migrations.RenameField(
            model_name='storelike',
            old_name='activeYn',
            new_name='likeYn',
        ),
        migrations.AlterField(
            model_name='funset',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 23, 58, 19, 597268), null=True),
        ),
        migrations.AlterField(
            model_name='funset',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 23, 58, 19, 597302), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 23, 58, 19, 596257), null=True),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 23, 58, 19, 596296), null=True),
        ),
        migrations.AlterField(
            model_name='storedic',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 23, 58, 19, 598597), null=True),
        ),
        migrations.AlterField(
            model_name='storedic',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 23, 58, 19, 598634), null=True),
        ),
        migrations.AlterField(
            model_name='storelike',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 23, 58, 19, 599729), null=True),
        ),
        migrations.AlterField(
            model_name='storelike',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 16, 23, 58, 19, 599764), null=True),
        ),
    ]
