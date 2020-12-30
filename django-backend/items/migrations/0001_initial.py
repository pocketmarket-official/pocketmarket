# Generated by Django 3.1.4 on 2020-12-30 04:29

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Add',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='AddCat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('addCatCd', models.CharField(default='00000', max_length=5)),
                ('addCatName', models.CharField(default='', max_length=20)),
                ('useYn', models.CharField(default='Y', max_length=1)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('itemCd', models.CharField(default='00000', max_length=20)),
                ('itemName', models.CharField(default='', max_length=200)),
                ('price', models.FloatField(default=0.0)),
                ('takeOutPrice', models.FloatField(default=0.0, null=True)),
                ('setYn', models.CharField(default='N', max_length=1)),
                ('itemFg', models.CharField(default='1', max_length=1)),
                ('itemDesc', models.CharField(default='', max_length=255)),
                ('useYn', models.CharField(default='Y', max_length=1)),
                ('imgSmallUrl', models.CharField(max_length=200, null=True)),
                ('ordPrtYn', models.CharField(default='N', max_length=1)),
                ('ordPrtText', models.CharField(max_length=100, null=True)),
                ('kdsSendYn', models.CharField(default='N', max_length=1)),
                ('remainCount', models.IntegerField(default=1)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='ItemAdd',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('itemSort', models.IntegerField(default=0)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Set',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seq', models.IntegerField(default=1)),
                ('subItemCd', models.CharField(default='00000', max_length=20)),
                ('subItemQty', models.IntegerField(default=1)),
                ('subItemPrice', models.FloatField(default=0.0)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='SetOpt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('changeItemCd', models.CharField(default='00000', max_length=20)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
    ]
