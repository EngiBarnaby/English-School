# Generated by Django 3.1.1 on 2020-10-22 16:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_auto_20201022_1940'),
        ('task', '0007_task_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='user',
            field=models.ManyToManyField(related_name='tasks', to='account.CustomUser'),
        ),
    ]