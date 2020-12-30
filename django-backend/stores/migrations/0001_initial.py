# Generated by Django 3.1.4 on 2020-12-30 06:04

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Funset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tmnId', models.CharField(max_length=20, null=True)),
                ('normVanCd', models.CharField(max_length=3, null=True)),
                ('callFg', models.CharField(max_length=1, null=True)),
                ('ordPrtTy', models.CharField(max_length=1, null=True)),
                ('alrYn', models.CharField(default='N', max_length=1)),
                ('alrTy', models.CharField(max_length=1, null=True)),
                ('alrPntFg', models.CharField(max_length=1, null=True)),
                ('alrUrl', models.CharField(max_length=100, null=True)),
                ('kktAlrCallId', models.CharField(max_length=20, null=True)),
                ('kktAlrAccessKey', models.CharField(max_length=255, null=True)),
                ('kktAlrFailFg', models.CharField(max_length=1, null=True)),
                ('kktAlrId', models.CharField(max_length=50, null=True)),
                ('kktAlrPw', models.CharField(max_length=50, null=True)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Pos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ordStartNo', models.CharField(max_length=10, null=True)),
                ('ordEndNo', models.CharField(max_length=10, null=True)),
                ('cntPayYn', models.CharField(max_length=1, null=True)),
                ('kktAlrTmplCd', models.CharField(max_length=50, null=True)),
                ('takeOutYn', models.CharField(default='Y', max_length=1)),
                ('callNoYn', models.CharField(default='Y', max_length=1)),
                ('useYn', models.CharField(default='Y', max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('storeCd', models.CharField(default='00000', max_length=10)),
                ('storeName', models.CharField(blank=True, max_length=50, null=True)),
                ('storeCeo', models.CharField(blank=True, max_length=50, null=True)),
                ('bizopNo', models.CharField(blank=True, max_length=20, null=True)),
                ('tel', models.CharField(blank=True, max_length=20, null=True)),
                ('mobile', models.CharField(blank=True, max_length=20, null=True)),
                ('fax', models.CharField(blank=True, max_length=20, null=True)),
                ('postCd', models.CharField(blank=True, max_length=6, null=True)),
                ('mail', models.CharField(blank=True, max_length=50, null=True)),
                ('addr1', models.CharField(blank=True, max_length=200, null=True)),
                ('addr2', models.CharField(blank=True, max_length=200, null=True)),
                ('oldAddr', models.CharField(blank=True, max_length=200, null=True)),
                ('openTm', models.CharField(blank=True, max_length=6, null=True)),
                ('closeTm', models.CharField(blank=True, max_length=6, null=True)),
                ('dvYn', models.CharField(blank=True, default='N', max_length=1)),
                ('useYn', models.CharField(blank=True, default='Y', max_length=1)),
                ('bankCd', models.CharField(blank=True, max_length=3, null=True)),
                ('bankNo', models.CharField(blank=True, max_length=40, null=True)),
                ('openDt', models.CharField(blank=True, max_length=8, null=True)),
                ('closeDt', models.CharField(blank=True, max_length=8, null=True)),
                ('openYn', models.CharField(default='Y', max_length=1)),
                ('imgLogoUrl', models.CharField(blank=True, max_length=200, null=True)),
                ('orgIf', models.CharField(blank=True, max_length=1000, null=True)),
                ('xPosition', models.FloatField(null=True)),
                ('yPosition', models.FloatField(null=True)),
                ('score', models.FloatField(default=0.0)),
                ('description', models.CharField(blank=True, max_length=250, null=True)),
                ('androidToken', models.CharField(blank=True, max_length=255)),
                ('iosToken', models.CharField(blank=True, max_length=255)),
                ('insDt', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(blank=True, max_length=30, null=True)),
                ('modDt', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(blank=True, max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='StoreDic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dicType', models.CharField(default='1', max_length=1)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='StoreLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('likeYn', models.CharField(default='Y', max_length=1)),
                ('insDt', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('insUs', models.CharField(blank=True, max_length=30, null=True)),
                ('modDt', models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True)),
                ('modUs', models.CharField(blank=True, max_length=30, null=True)),
                ('store', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store')),
            ],
        ),
    ]
