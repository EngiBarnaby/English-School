# Generated by Django 3.1.1 on 2020-10-31 12:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0006_delete_userword'),
        ('vocabulary', '0005_auto_20201031_1512'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserWord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_add', models.DateField(auto_now_add=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='account.customuser')),
                ('word', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='vocabulary.word')),
            ],
        ),
    ]