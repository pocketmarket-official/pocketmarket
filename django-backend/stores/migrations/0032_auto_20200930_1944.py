# Generated by Django 3.1.1 on 2020-09-30 10:44

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('keymaps', '0001_initial'),
        ('stores', '0031_auto_20200930_1924'),
    ]

    operations = [
        migrations.CreateModel(
            name='Funset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tmnId', models.CharField(blank=True, max_length=20)),
                ('normVanCd', models.CharField(default='000', max_length=3)),
                ('callFg', models.CharField(default='0', max_length=1)),
                ('ordPrtTy', models.CharField(default='0', max_length=1)),
                ('alrYn', models.CharField(default='N', max_length=1)),
                ('alrTy', models.CharField(default='0', max_length=1)),
                ('alrPntFg', models.CharField(default='0', max_length=1)),
                ('alrUrl', models.CharField(blank=True, max_length=100)),
                ('kktAlrCallId', models.CharField(blank=True, max_length=20)),
                ('kktAlrAccessKey', models.CharField(blank=True, max_length=255)),
                ('kktAlrFailFg', models.CharField(default='0', max_length=1)),
                ('kktAlrId', models.CharField(blank=True, max_length=50)),
                ('kktAlrPw', models.CharField(blank=True, max_length=50)),
                ('insDt', models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 44, 48, 527714))),
                ('insUs', models.CharField(default='defaultValue', max_length=30)),
                ('modDt', models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 44, 48, 527749))),
                ('modUs', models.CharField(default='defaultValue', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Pos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ordStartNo', models.CharField(default='0000', max_length=10)),
                ('ordEndNo', models.CharField(default='9999', max_length=10)),
                ('cntPayYn', models.CharField(default='N', max_length=1)),
                ('kktAlrTmplCd', models.CharField(blank=True, max_length=50)),
                ('takeOutYn', models.CharField(default='Y', max_length=1)),
                ('callNoYn', models.CharField(default='Y', max_length=1)),
                ('useYn', models.CharField(default='Y', max_length=1)),
                ('keymapCd', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='keymaps.storekeymap')),
            ],
        ),
        migrations.RemoveField(
            model_name='storepos',
            name='storeCd',
        ),
        migrations.RenameField(
            model_name='store',
            old_name='storeAddr1',
            new_name='addr1',
        ),
        migrations.RenameField(
            model_name='store',
            old_name='storeAddr2',
            new_name='addr2',
        ),
        migrations.RenameField(
            model_name='store',
            old_name='storeFax',
            new_name='fax',
        ),
        migrations.RenameField(
            model_name='store',
            old_name='storeMail',
            new_name='mail',
        ),
        migrations.RenameField(
            model_name='store',
            old_name='storeMobile',
            new_name='mobile',
        ),
        migrations.RenameField(
            model_name='store',
            old_name='storeOldAddr',
            new_name='oldAddr',
        ),
        migrations.RenameField(
            model_name='store',
            old_name='storeTel',
            new_name='tel',
        ),
        migrations.AlterField(
            model_name='store',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 44, 48, 526613)),
        ),
        migrations.AlterField(
            model_name='store',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 9, 30, 19, 44, 48, 526652)),
        ),
        migrations.DeleteModel(
            name='storeFunSet',
        ),
        migrations.DeleteModel(
            name='storePos',
        ),
        migrations.AddField(
            model_name='pos',
            name='storeCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store'),
        ),
        migrations.AddField(
            model_name='funset',
            name='storeCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store'),
        ),
    ]
