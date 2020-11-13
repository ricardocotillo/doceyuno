# Generated by Django 3.1.3 on 2020-11-13 00:53

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import shop.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cyan', models.IntegerField(validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('magenta', models.IntegerField(validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('yellow', models.IntegerField(validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('black', models.IntegerField(validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('red', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MaxValueValidator(250), django.core.validators.MinValueValidator(0)])),
                ('green', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MaxValueValidator(250), django.core.validators.MinValueValidator(0)])),
                ('blue', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MaxValueValidator(250), django.core.validators.MinValueValidator(0)])),
                ('alpha', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(0)])),
                ('hex_code', models.CharField(blank=True, max_length=7, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('symbol', models.CharField(max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('base_price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('currency', models.CharField(max_length=3)),
                ('currency_symbol', models.CharField(max_length=3)),
                ('shipping_cost', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tshirt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('slug', models.SlugField(unique=True)),
                ('description', models.TextField()),
                ('print_image', models.ImageField(upload_to=shop.models.get_file_path)),
                ('image', models.ImageField(upload_to=shop.models.get_file_path)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('end_date', models.DateTimeField(blank=True, null=True)),
                ('active', models.BooleanField(default=True)),
                ('featured', models.BooleanField(default=False)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('sale_price', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('total_sales', models.IntegerField(default=0)),
                ('colors', models.ManyToManyField(related_name='colors', to='shop.Color')),
                ('default_color', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='default_color', to='shop.color')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cart', models.TextField(blank=True, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
