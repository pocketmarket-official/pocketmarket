# Generated by Django 3.1.4 on 2021-03-07 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0003_auto_20210308_0432'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reply',
            name='deleteYn',
            field=models.CharField(default='N', max_length=17),
        ),
        migrations.AlterField(
            model_name='reviewlike',
            name='likeYn',
            field=models.CharField(default='Y', max_length=17),
        ),
    ]
