from django.contrib import admin
from .models import Order, BillingInfo
# Register your models here.
admin.site.register(Order)
admin.site.register(BillingInfo)