# Generated by Django 3.1.4 on 2021-03-07 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brand',
            name='useYn',
            field=models.CharField(default='Y', max_length=5),
        ),
    ]
