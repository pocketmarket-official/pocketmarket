# Generated by Django 3.1.4 on 2021-03-07 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('keymaps', '0003_auto_20210308_0432'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keymap',
            name='dispYn',
            field=models.CharField(default='Y', max_length=17),
        ),
        migrations.AlterField(
            model_name='storekeymap',
            name='useYn',
            field=models.CharField(default='Y', max_length=17),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='imgUseYn',
            field=models.CharField(default='N', max_length=17),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='touchGroupCd',
            field=models.CharField(default='000', max_length=17),
        ),
        migrations.AlterField(
            model_name='touchgroup',
            name='useYn',
            field=models.CharField(default='Y', max_length=17),
        ),
    ]
