from django.shortcuts import render
from django.views.generic import TemplateView

from shop.models import Tshirt


class HomeView(TemplateView):
    template_name = "www/index.html"


def home(req):
    context = {
        'tshirts': Tshirt.objects.order_by('date')[:4]
    }
    return render(req, template_name='www/index.html', context=context)
