# Generated by Django 3.1.4 on 2021-03-07 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0004_auto_20210308_0441'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='brandCd',
            field=models.CharField(default='00000', max_length=5),
        ),
    ]
