from django.views.generic import DetailView
from django.conf import settings

from shop.models import Cart
# Create your views here.

class CheckoutView(DetailView):
    model = Cart
    template_name = 'checkout/checkout.html'

    def get_object(self, queryset):
        return self.request.user.cart
    
    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)
        ctx['mercadopago_public'] = settings.MERCADOPAGO_PUBLIC
        return ctx
    