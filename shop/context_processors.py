import simplejson as json
from .models import Cart, Store

def cart(req):
    if req.user.is_anonymous:
        data = {
            'content': [],
            'sub_total': 0,
            'item_count': 0,
        }
        return {'cart': data}
        
    cart = Cart.objects.get(user=req.user)
    data = {
        'content': json.loads(cart.cart),
        'sub_total': cart.sub_total(),
        'item_count': cart.item_count(),
    }
    return {'cart': data}

def store(req):
    store = Store.objects.get()
    return {'store': store}