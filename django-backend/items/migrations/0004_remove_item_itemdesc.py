# Generated by Django 3.1.4 on 2020-12-30 03:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0003_item_itemdesc'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='itemDesc',
        ),
    ]
