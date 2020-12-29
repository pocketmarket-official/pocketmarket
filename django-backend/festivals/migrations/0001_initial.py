# Generated by Django 3.1.4 on 2020-12-29 04:53

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Festival',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('festivalCd', models.CharField(blank=True, max_length=5, null=True)),
                ('festivalName', models.CharField(blank=True, max_length=100, null=True)),
                ('startDt', models.CharField(blank=True, max_length=8, null=True)),
                ('endDt', models.CharField(blank=True, max_length=8, null=True)),
                ('descriptionHeader', models.CharField(blank=True, max_length=100, null=True)),
                ('descriptionDetail', models.CharField(blank=True, max_length=500, null=True)),
                ('joinCount', models.IntegerField(blank=True, null=True)),
                ('simulOperCount', models.IntegerField(blank=True, null=True)),
                ('img', models.ImageField(null=True, upload_to='images/festival/img')),
                ('innerMap', models.ImageField(blank=True, null=True, upload_to='images/festival/innerMap')),
                ('addr1', models.CharField(blank=True, max_length=200, null=True)),
                ('addr2', models.CharField(blank=True, max_length=200, null=True)),
                ('oldAddr', models.CharField(blank=True, max_length=200, null=True)),
                ('organ', models.CharField(blank=True, max_length=50, null=True)),
                ('organManager', models.CharField(blank=True, max_length=10, null=True)),
                ('organPhone', models.CharField(blank=True, max_length=20, null=True)),
                ('organMail', models.CharField(blank=True, max_length=50, null=True)),
                ('openYn', models.CharField(default='Y', max_length=1)),
                ('insDt', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(blank=True, max_length=30, null=True)),
                ('modDt', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(blank=True, max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Join',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seq', models.IntegerField(default=1)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now)),
                ('modUs', models.CharField(max_length=30, null=True)),
                ('festivalCd', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='festivals.festival')),
            ],
        ),
    ]
