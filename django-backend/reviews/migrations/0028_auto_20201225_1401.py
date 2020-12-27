# Generated by Django 3.1.4 on 2020-12-25 14:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0027_auto_20201225_1353'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reply',
            name='insDt',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='reply',
            name='modDt',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='review',
            name='insDt',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True),
        ),
        migrations.AlterField(
            model_name='review',
            name='modDt',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True),
        ),
        migrations.AlterField(
            model_name='reviewlike',
            name='insDt',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='reviewlike',
            name='modDt',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]