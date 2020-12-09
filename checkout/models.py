from django.db import models
from django.core.serializers.json import DjangoJSONEncoder

# TEST-da001cb5-463f-4e40-b54a-ead19db5b9df
# TEST-1424387866638539-071404-b0cf76228216865d08446315bb7c663c-609230202

class Order(models.Model):
    deparments = [
        ('AM', 'Amazonas'),
        ('AN', 'Ancash'),
        ('AP', 'Apurimac'),
        ('AR', 'Arequipa'),
        ('AY', 'Ayacucho'),
        ('CA', 'Cajamarca'),
        ('CLL', 'Callao'),
        ('CU', 'Cusco'),
        ('HV', 'Huancavelica'),
        ('HU', 'Huanuco'),
        ('IC', 'Ica'),
        ('JU', 'Junin'),
        ('LL', 'La Libertad'),
        ('LA', 'Lambayeque'),
        ('LI', 'Lima'),
        ('LO', 'Loreto'),
        ('MD', 'Madre de Dios'),
        ('MO', 'Moquegua'),
        ('PA', 'Pasco'),
        ('PI', 'Piura'),
        ('PU', 'Puno'),
        ('SM', 'San Martin'),
        ('TA', 'Tacna'),
        ('TU', 'Tumbes'),
        ('UC', 'Ucayali'),
    ]
    user = models.ForeignKey('customauth.User', on_delete=models.SET_NULL, null=True, related_name='orders')
    billing_first_name = models.CharField(max_length=150)
    billing_last_name = models.CharField(max_length=150)
    billing_address = models.CharField(max_length=300)
    billing_address2 = models.CharField(max_length=300, blank=True)
    billing_department = models.CharField(max_length=3, choices=deparments)
    billing_province = models.CharField(max_length=50)
    billing_district = models.CharField(max_length=50)
    shipping_first_name = models.CharField(max_length=150)
    shipping_last_name = models.CharField(max_length=150)
    shipping_address = models.CharField(max_length=300)
    shipping_address2 = models.CharField(max_length=300, blank=True)
    shipping_department = models.CharField(max_length=3, choices=deparments)
    shipping_province = models.CharField(max_length=50)
    shipping_district = models.CharField(max_length=50)
    items = models.JSONField(encoder=DjangoJSONEncoder, default=list)

class BillingInfo(models.Model):
    deparments = [
        ('AM', 'Amazonas'),
        ('AN', 'Ancash'),
        ('AP', 'Apurimac'),
        ('AR', 'Arequipa'),
        ('AY', 'Ayacucho'),
        ('CA', 'Cajamarca'),
        ('CLL', 'Callao'),
        ('CU', 'Cusco'),
        ('HV', 'Huancavelica'),
        ('HU', 'Huanuco'),
        ('IC', 'Ica'),
        ('JU', 'Junin'),
        ('LL', 'La Libertad'),
        ('LA', 'Lambayeque'),
        ('LI', 'Lima'),
        ('LO', 'Loreto'),
        ('MD', 'Madre de Dios'),
        ('MO', 'Moquegua'),
        ('PA', 'Pasco'),
        ('PI', 'Piura'),
        ('PU', 'Puno'),
        ('SM', 'San Martin'),
        ('TA', 'Tacna'),
        ('TU', 'Tumbes'),
        ('UC', 'Ucayali'),
    ]
    user = models.OneToOneField('customauth.User', on_delete=models.CASCADE)
    dni = models.CharField(max_length=8)
    phone = models.CharField(max_length=9)
    address = models.CharField(max_length=300)
    address2 = models.CharField(max_length=300, blank=True)
    department = models.CharField(max_length=3, choices=deparments)
    province = models.CharField(max_length=50)
    district = models.CharField(max_length=50)

