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
    
    try:
        cart = Cart.objects.get(user=req.user)
    except:
        cart = None
    data = {
        'content': cart.cart if cart else [],
        'sub_total': cart.sub_total() if cart else 0.0,
        'item_count': cart.item_count() if cart else 0,
    }
    return {'cart': data}

def store(req):
    try:
        store = Store.objects.get()
    except:
        store = {}
    return {'store': store}