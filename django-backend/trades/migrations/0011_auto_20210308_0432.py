# Generated by Django 3.1.4 on 2021-03-07 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0010_auto_20210308_0428'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cardlog',
            name='apprFlag',
            field=models.CharField(default=1, max_length=5),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='instFlag',
            field=models.CharField(default='0', max_length=5),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='instMonth',
            field=models.CharField(default='00', max_length=5),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='returnYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='sendYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='stateFlag',
            field=models.CharField(default='1', max_length=5),
        ),
        migrations.AlterField(
            model_name='etclog',
            name='sendYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='sendYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='taxYn',
            field=models.CharField(default='Y', max_length=5),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='orderStatus',
            field=models.CharField(default=1, max_length=5),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='returnYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='reviewYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='saleDay',
            field=models.CharField(default='', max_length=5),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='sendYn',
            field=models.CharField(default='N', max_length=5),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='soldoutYn',
            field=models.CharField(default='Y', max_length=5),
        ),
    ]