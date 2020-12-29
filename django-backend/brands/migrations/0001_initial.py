# Generated by Django 3.1.4 on 2020-12-28 18:43

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brandCd', models.CharField(default='00000', max_length=5)),
                ('brandName', models.CharField(default='', max_length=100)),
                ('useYn', models.CharField(default='Y', max_length=1)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
    ]
