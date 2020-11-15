# Generated by Django 3.1.1 on 2020-11-01 16:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0006_delete_userword'),
        ('vocabulary', '0007_auto_20201031_1519'),
    ]

    operations = [
        migrations.AddField(
            model_name='userword',
            name='repeated',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='userword',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='words', to='account.customuser'),
        ),
        migrations.AlterField(
            model_name='userword',
            name='word',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='words', to='vocabulary.word'),
        ),
    ]
