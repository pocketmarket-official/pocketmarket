# Generated by Django 3.1.4 on 2021-01-18 13:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('brands', '0001_initial'),
        ('stores', '0001_initial'),
        ('items', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='setopt',
            name='storeCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='stores.store'),
        ),
        migrations.AddField(
            model_name='setopt',
            name='subItemCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='items.item'),
        ),
        migrations.AddField(
            model_name='set',
            name='setItemCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='items.item'),
        ),
        migrations.AddField(
            model_name='itemadd',
            name='itemAddCd',
            field=models.ManyToManyField(related_name='itemAddCd', to='items.Item'),
        ),
        migrations.AddField(
            model_name='itemadd',
            name='itemCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='items.item'),
        ),
        migrations.AddField(
            model_name='item',
            name='brandCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='brands.brand'),
        ),
        migrations.AddField(
            model_name='add',
            name='addCatCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='items.addcat'),
        ),
        migrations.AddField(
            model_name='add',
            name='addItemCd',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='items.item'),
        ),
    ]
