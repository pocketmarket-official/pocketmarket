# Generated by Django 3.1.4 on 2021-03-07 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_tmpflag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='tmpFlag',
            field=models.CharField(default='2', max_length=1),
        ),
    ]
