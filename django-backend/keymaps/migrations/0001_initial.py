# Generated by Django 3.1.4 on 2021-01-18 13:10

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Keymap',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('posPage', models.IntegerField(default=0)),
                ('posIndex', models.IntegerField(default=0)),
                ('soldoutYn', models.CharField(max_length=1, null=True)),
                ('cprtGroupCd', models.CharField(max_length=1, null=True)),
                ('dispYn', models.CharField(default='Y', max_length=1)),
                ('expectCnt', models.IntegerField(default=0)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='StoreKeymap',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('keymapCd', models.CharField(default='000', max_length=10)),
                ('keymapName', models.CharField(default='', max_length=30)),
                ('blankImgUrl', models.CharField(max_length=200, null=True)),
                ('useYn', models.CharField(default='Y', max_length=1)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now)),
                ('modUs', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TouchGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('touchGroupCd', models.CharField(default='000', max_length=5)),
                ('touchGroupName', models.CharField(default='', max_length=100)),
                ('imgUrl', models.CharField(max_length=200, null=True)),
                ('imgUseYn', models.CharField(default='N', max_length=1)),
                ('posPage', models.IntegerField(default=0)),
                ('posIndex', models.IntegerField(default=0)),
                ('useYn', models.CharField(default='Y', max_length=1)),
                ('insDt', models.DateTimeField(default=django.utils.timezone.now)),
                ('insUs', models.CharField(max_length=30, null=True)),
                ('modDt', models.DateTimeField(default=django.utils.timezone.now)),
                ('modUs', models.CharField(max_length=30, null=True)),
                ('keymapCd', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='keymaps.storekeymap')),
            ],
        ),
    ]
