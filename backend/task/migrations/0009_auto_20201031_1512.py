# Generated by Django 3.1.1 on 2020-10-31 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_userword'),
        ('task', '0008_auto_20201022_1940'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='user',
            field=models.ManyToManyField(blank=True, related_name='tasks', to='account.CustomUser'),
        ),
    ]
