# Generated by Django 3.1.4 on 2021-03-07 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cprts', '0005_auto_20210308_0441'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cprt',
            name='cprtCd',
            field=models.CharField(default='000', max_length=3),
        ),
        migrations.AlterField(
            model_name='group',
            name='cprtGroupCd',
            field=models.CharField(default='000', max_length=3),
        ),
    ]