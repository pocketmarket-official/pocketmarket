# Generated by Django 3.1.4 on 2020-12-30 06:04

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cprts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='KdsDetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('storeCd', models.CharField(max_length=10, null=True)),
                ('saleDt', models.CharField(blank=True, max_length=8)),
                ('posNo', models.CharField(blank=True, max_length=5)),
                ('billNo', models.CharField(blank=True, max_length=10)),
                ('seq', models.IntegerField(default=1)),
                ('itemName', models.CharField(blank=True, max_length=20)),
                ('qty', models.IntegerField(default=1)),
                ('itemSellGroup', models.CharField(blank=True, max_length=3)),
                ('itemSellLevel', models.CharField(blank=True, max_length=3)),
                ('itemSellType', models.CharField(blank=True, max_length=3)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='KdsHeader',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('storeCd', models.CharField(max_length=10, null=True)),
                ('saleDt', models.CharField(blank=True, max_length=8)),
                ('posNo', models.CharField(blank=True, max_length=5)),
                ('billNo', models.CharField(blank=True, max_length=10)),
                ('orderStatus', models.CharField(blank=True, max_length=1)),
                ('saleTime', models.CharField(blank=True, max_length=8)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Master',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('storeCd', models.CharField(max_length=10, null=True)),
                ('refreshTime', models.IntegerField(default=1)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='SetMaster',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('storeCd', models.CharField(max_length=10, null=True)),
                ('monitorFlag', models.CharField(default=1, max_length=1)),
                ('summaryYn', models.CharField(default='Y', max_length=1)),
                ('fontSize', models.CharField(default=10, max_length=1)),
                ('orderExpandYn', models.CharField(default='Y', max_length=1)),
                ('soundYn', models.CharField(default='Y', max_length=1)),
                ('backRgb', models.CharField(max_length=20, null=True)),
                ('foreRgb', models.CharField(max_length=20, null=True)),
                ('revertRgb', models.CharField(max_length=20, null=True)),
                ('voidRgb', models.CharField(max_length=20, null=True)),
                ('eatInRgb', models.CharField(max_length=20, null=True)),
                ('takeOutRgb', models.CharField(max_length=20, null=True)),
                ('deliveryRgb', models.CharField(max_length=20, null=True)),
                ('driveThruRgb', models.CharField(max_length=20, null=True)),
                ('preOrderRgb', models.CharField(max_length=20, null=True)),
                ('useYn', models.CharField(default='Y', max_length=1)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
                ('cprtGroupCd', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='cprts.group')),
            ],
        ),
    ]
