# Generated by Django 3.1.4 on 2021-03-07 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0004_auto_20210308_0438'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addcat',
            name='addCatCd',
            field=models.CharField(default='00000', max_length=5),
        ),
        migrations.AlterField(
            model_name='addcat',
            name='useYn',
            field=models.CharField(default='Y', max_length=1),
        ),
        migrations.AlterField(
            model_name='item',
            name='itemFg',
            field=models.CharField(default='1', max_length=1),
        ),
        migrations.AlterField(
            model_name='item',
            name='kdsSendYn',
            field=models.CharField(default='N', max_length=1),
        ),
        migrations.AlterField(
            model_name='item',
            name='ordPrtYn',
            field=models.CharField(default='N', max_length=1),
        ),
        migrations.AlterField(
            model_name='item',
            name='setYn',
            field=models.CharField(default='N', max_length=1),
        ),
        migrations.AlterField(
            model_name='item',
            name='useYn',
            field=models.CharField(default='Y', max_length=1),
        ),
    ]
