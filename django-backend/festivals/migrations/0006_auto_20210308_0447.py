# Generated by Django 3.1.4 on 2021-03-07 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('festivals', '0005_auto_20210308_0441'),
    ]

    operations = [
        migrations.AlterField(
            model_name='festival',
            name='festivalCd',
            field=models.CharField(blank=True, max_length=5, null=True),
        ),
    ]
