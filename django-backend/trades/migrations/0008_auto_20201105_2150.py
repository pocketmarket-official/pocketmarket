# Generated by Django 3.1.2 on 2020-11-05 12:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trades', '0007_auto_20201105_1455'),
    ]

    operations = [
        migrations.DeleteModel(
            name='CashLog',
        ),
        migrations.DeleteModel(
            name='EtcLog',
        ),
        migrations.DeleteModel(
            name='StandardLog',
        ),
        migrations.AddField(
            model_name='cardlog',
            name='orgApprNo',
            field=models.CharField(default='00000000', max_length=8),
        ),
        migrations.AddField(
            model_name='cardlog',
            name='orgBillNo',
            field=models.CharField(default='0000', max_length=10),
        ),
        migrations.AddField(
            model_name='cardlog',
            name='orgPosNo',
            field=models.CharField(default='91', max_length=5),
        ),
        migrations.AddField(
            model_name='cardlog',
            name='orgSaleDate',
            field=models.CharField(default='00000000', max_length=8),
        ),
        migrations.AddField(
            model_name='cardlog',
            name='orgSeq',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='cardlog',
            name='orgStoreCd',
            field=models.CharField(default='00000', max_length=10),
        ),
        migrations.AddField(
            model_name='cardlog',
            name='remark',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='cardlog',
            name='sendYn',
            field=models.CharField(default='N', max_length=1),
        ),
        migrations.AddField(
            model_name='saledetail',
            name='sendYn',
            field=models.CharField(default='N', max_length=1),
        ),
        migrations.AddField(
            model_name='saleheader',
            name='orgBillNo',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='saleheader',
            name='orgPosNo',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AddField(
            model_name='saleheader',
            name='orgSaleDt',
            field=models.CharField(max_length=8, null=True),
        ),
        migrations.AddField(
            model_name='saleheader',
            name='orgStoreCd',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='saleheader',
            name='sendYn',
            field=models.CharField(default='N', max_length=1),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='billNo',
            field=models.CharField(default='0000', max_length=10),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 21, 50, 47, 357590), null=True),
        ),
        migrations.AlterField(
            model_name='cardlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 21, 50, 47, 357645), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 21, 50, 47, 361609), null=True),
        ),
        migrations.AlterField(
            model_name='cornerstatelog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 21, 50, 47, 361648), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 21, 50, 47, 359033), null=True),
        ),
        migrations.AlterField(
            model_name='purchaselog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 21, 50, 47, 359216), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='billNo',
            field=models.CharField(default='0000', max_length=10),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 21, 50, 47, 356186), null=True),
        ),
        migrations.AlterField(
            model_name='saledetail',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 21, 50, 47, 356224), null=True),
        ),
        migrations.AlterField(
            model_name='saleheader',
            name='billNo',
            field=models.CharField(default='0000', max_length=10),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='insDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 21, 50, 47, 359815), null=True),
        ),
        migrations.AlterField(
            model_name='soldoutlog',
            name='modDt',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 5, 21, 50, 47, 359849), null=True),
        ),
    ]
