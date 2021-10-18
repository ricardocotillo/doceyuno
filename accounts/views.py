from functools import reduce
from django.db.models import F, Sum
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
        if self.object_list.count() > 0:
            context['lifetime_sales'] = self.object_list.annotate(lifetime_sales=(F('total_sales') * (F('price') - store.base_price)))\
                .aggregate(total_lifetime_sales=Sum('lifetime_sales'))['total_lifetime_sales']
        return context

    def get_queryset(self):
        return Tshirt.objects.filter(user=self.request.user)