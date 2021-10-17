from functools import reduce

from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import ListView

from shop.models import Tshirt, Store


class AccountView(LoginRequiredMixin, ListView):
    template_name = 'accounts/dashboard.html'
    context_object_name = 'tshirts'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        store = Store.objects.get()
        context['store'] = store
        if context['object_list'].count() > 0:
            context['lifetime_sales'] = reduce(lambda a, b: (a.total_sales * (a.price - store.base_price)) + (b.total_sales * (b.price - store.base_price)), context['object_list'])
        else:
            context['lifetime_sales'] = '0.00'
        return context

    def get_queryset(self):
        return Tshirt.objects.filter(user=self.request.user)
