# Generated by Django 3.1.1 on 2020-10-18 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='count_task_mistakes',
            field=models.IntegerField(default=0),
        ),
    ]