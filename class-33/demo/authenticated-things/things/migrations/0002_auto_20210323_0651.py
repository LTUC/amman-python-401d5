# Generated by Django 3.1.7 on 2021-03-23 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('things', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='thing',
            name='description',
            field=models.TextField(default='', null=True),
        ),
    ]