from django.contrib import admin
from . import models

admin.site.register(models.Store)
admin.site.register(models.Color)
admin.site.register(models.Size)
admin.site.register(models.Tshirt)
admin.site.register(models.Cart)