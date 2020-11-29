import uuid
import os
from decimal import Decimal

import simplejson as json

from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.core.serializers.json import DjangoJSONEncoder

from customauth.models import User


class Store(models.Model):
    name = models.CharField(max_length=100)
    base_price = models.DecimalField(decimal_places=2, max_digits=5)
    currency = models.CharField(max_length=3)
    currency_symbol = models.CharField(max_length=3)
    shipping_cost = models.DecimalField(
        decimal_places=2, max_digits=5, null=True, blank=True)

    def __str__(self):
        return self.name


class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cart = models.JSONField(encoder=DjangoJSONEncoder, default=list)

    def __str__(self):
        return self.user.email

    def item_count(self):
        cart = self.cart
        quantities = [x['quantity'] for x in cart]
        item_count = sum(quantities)
        return item_count

    def sub_total(self):
        cart = self.cart
        prices = [Decimal(x['total_price']) for x in cart]
        sub_total = sum(prices)
        return sub_total


class Color(models.Model):
    cyan = models.IntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)])
    magenta = models.IntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)])
    yellow = models.IntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)])
    black = models.IntegerField(
        validators=[MaxValueValidator(100), MinValueValidator(0)])
    red = models.IntegerField(blank=True, null=True, validators=[
                              MaxValueValidator(250), MinValueValidator(0)])
    green = models.IntegerField(blank=True, null=True, validators=[
                                MaxValueValidator(250), MinValueValidator(0)])
    blue = models.IntegerField(blank=True, null=True, validators=[
                               MaxValueValidator(250), MinValueValidator(0)])
    alpha = models.IntegerField(blank=True, null=True, validators=[
                                MaxValueValidator(100), MinValueValidator(0)])
    hex_code = models.CharField(max_length=7, blank=True, null=True)

    def __str__(self):
        return self.hex_code


class Size(models.Model):
    name = models.CharField(max_length=20)
    symbol = models.CharField(max_length=3)

    def __str__(self):
        return self.name


def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('tshirts', filename)


class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    print_image = models.ImageField(upload_to=get_file_path)
    image = models.ImageField(upload_to=get_file_path)
    date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(blank=True, null=True)
    active = models.BooleanField(default=True)
    featured = models.BooleanField(default=False)
    price = models.DecimalField(decimal_places=2, max_digits=5)
    sale_price = models.DecimalField(
        decimal_places=2, max_digits=5, blank=True, null=True)
    total_sales = models.IntegerField(default=0)

    class Meta:
        abstract = True


class Tshirt(Product):
    colors = models.ManyToManyField(Color, related_name='colors')
    default_color = models.ForeignKey(
        Color, on_delete=models.SET_NULL, null=True, related_name='default_color')

    def __str__(self):
        return self.name
