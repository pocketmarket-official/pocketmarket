# Generated by Django 3.1.4 on 2021-03-07 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0002_auto_20210308_0432'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='brandCd',
            field=models.CharField(default='00000', max_length=5),
        ),
        migrations.AlterField(
            model_name='brand',
            name='useYn',
            field=models.CharField(default='Y', max_length=1),
        ),
    ]
