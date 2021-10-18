from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField('email address', unique=True, error_messages={'unique': "A user with that email already exists.",})
    mercadopago_access_token = models.CharField(max_length=300, null=True, blank=True)
    mercadopago_refresh_token = models.CharField(max_length=300, null=True, blank=True)
    mercadopago_public_key = models.CharField(max_length=300, null=True, blank=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
