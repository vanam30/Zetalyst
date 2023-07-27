# Generated by Django 3.2.12 on 2023-07-15 19:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_auto_20230708_1915'),
    ]

    operations = [
        migrations.AlterField(
            model_name='business',
            name='profile_pic',
            field=models.ImageField(blank=True, upload_to='profiles/'),
        ),
        migrations.AlterField(
            model_name='freelancer',
            name='profile_pic',
            field=models.ImageField(blank=True, upload_to='profiles/'),
        ),
        migrations.CreateModel(
            name='JobPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('skills_required', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('business', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jobs.business')),
            ],
        ),
    ]
