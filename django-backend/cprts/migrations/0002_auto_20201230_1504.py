# Generated by Django 3.1.4 on 2020-12-30 06:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('stores', '0001_initial'),
        ('cprts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='relation',
            name='storeCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store'),
        ),
        migrations.AddField(
            model_name='group',
            name='storeCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store'),
        ),
        migrations.AddField(
            model_name='cprt',
            name='storeCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store'),
        ),
    ]
