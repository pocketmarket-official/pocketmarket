# Generated by Django 3.1.2 on 2020-10-21 08:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('festivals', '0001_initial'),
        ('stores', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='join',
            name='storeCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store'),
        ),
    ]
