import simplejson as json
import uuid
from datetime import datetime, timedelta
from decimal import Decimal

from django.contrib.auth.decorators import login_required
from django.core.serializers import serialize
from django.utils.text import slugify
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse_lazy
from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest, HttpResponseRedirect
from django.views.generic import DetailView, DeleteView
from django.views.decorators.http import require_POST

from .models import Tshirt, Store, Color, Cart
from .forms import TshirtForm, CartAddProductForm


@require_POST
def cart_add(req, product_id):
    cart = Cart.objects.get_or_create(user=req.user)[0]
    product = get_object_or_404(Tshirt, id=product_id)
    form = CartAddProductForm(req.POST)
    if form.is_valid():
        cd = form.cleaned_data
        if cart.cart:
            cart_items = json.loads(cart.cart)
            exists = False
            index = 0
            for i, item in enumerate(cart_items):
                exists = item['product_id'] == product.id and item['color'] == cd['color'] and item['size'] == cd['size']
                if exists:
                    index = i
                    break
            if exists:
                cart_items[index]['quantity'] += cd['quantity']
                cart_items[index]['total_price'] = cart_items[index]['quantity'] * \
                    cart_items[index]['price']
            else:
                item = {
                    'uuid': str(uuid.uuid4()),
                    'image': product.image.url,
                    'product_id': product_id,
                    'name': product.name,
                    'color': cd['color'],
                    'size': cd['size'],
                    'quantity': cd['quantity'],
                    'price': product.price,
                    'total_price': cd['quantity'] * product.price
                }
                cart_items.append(item)
            cart.cart = json.dumps(cart_items)
            cart.save()
        else:
            item = {
                'uuid': str(uuid.uuid4()),
                'image': product.image.url,
                'product_id': product_id,
                'name': product.name,
                'color': cd['color'],
                'size': cd['size'],
                'quantity': cd['quantity'],
                'price': product.price,
                'total_price': cd['quantity'] * product.price
            }
            cart_items = json.dumps([item])
            cart.cart = cart_items
            cart.save()
        return HttpResponseRedirect(reverse_lazy('product-detail', args=[product.slug]))
    return reverse_lazy('product-detail', args=[product.slug])

def cart_update(req, item_uuid):
    data = json.loads(req.body)
    quantity = data['quantity']
    cart = Cart.objects.get(user=req.user)
    cart_items = json.loads(cart.cart)
    updated_item = {}
    for item in cart_items:
        if item['uuid'] == str(item_uuid):
            item['quantity'] = quantity
            item['total_price'] = quantity * item['price']
            updated_item = item
            break
    cart.cart = json.dumps(cart_items)
    cart.save()
    return JsonResponse(updated_item)

def cart_remove(req, item_uuid):
    cart = Cart.objects.get(user=req.user)
    cart_items = json.loads(cart.cart)
    index = 0
    for i, item in enumerate(cart_items):
        if item['uuid'] == str(item_uuid):
            index = i
            break
    cart_items.pop(index)
    cart.cart = json.dumps(cart_items)
    cart.save()
    return HttpResponseRedirect(reverse_lazy('cart'))


@login_required
def cart_detail(req):
    return render(req, 'shop/cart.html')


class ProductDetailView(DetailView):
    model = Tshirt
    template_name = 'shop/detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = CartAddProductForm(
            initial={'quantity': 1, 'color': context['tshirt'].default_color.hex_code})
        return context


class ProductDeleteView(DeleteView):
    model = Tshirt
    success_url = reverse_lazy('account-products')


def store_info(req):
    if req.method == 'GET':
        store = Store.objects.get()
        colors = Color.objects.all()
        store_data = {
            'name': store.name,
            'basePrice': store.base_price,
            'currency': store.currency,
            'currencySymbol': store.currency_symbol,
            'colors': [x.hex_code for x in colors]
        }

        return JsonResponse(store_data)


def create_product(req):
    if req.method == 'POST':

        data = {
            'user': req.user.id,
            'name': req.POST.get('name'),
            'slug': slugify(req.POST.get('name')),
            'description': req.POST.get('description'),
            'price': req.POST.get('price'),
            'default_color': Color.objects.get(
                hex_code=req.POST.get('default_color')),
            'colors': Color.objects.filter(hex_code__in=req.POST.getlist('colors'))
        }

        if req.POST.get('duration') != "0":
            data['end_date'] = datetime.now(
            ) + timedelta(days=int(req.POST.get('duration')))

        form = TshirtForm(data=data, files=req.FILES)

        if form.is_valid():
            form.save()

            return HttpResponse()
        else:
            return JsonResponse(form.errors, status=400)
