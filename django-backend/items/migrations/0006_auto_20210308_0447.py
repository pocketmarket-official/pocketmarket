# Generated by Django 3.1.4 on 2021-03-07 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0005_auto_20210308_0441'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addcat',
            name='addCatCd',
            field=models.CharField(default='00000', max_length=5),
        ),
        migrations.AlterField(
            model_name='item',
            name='itemFg',
            field=models.CharField(default='1', max_length=5),
        ),
    ]
