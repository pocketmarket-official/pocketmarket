# Generated by Django 3.1.4 on 2021-03-07 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0008_saleheader_etcamt'),
    ]

    operations = [
        migrations.AddField(
            model_name='etclog',
            name='sendYn',
            field=models.CharField(default='N', max_length=1),
        ),
    ]