from django.urls import path
from .views import ProductDetailView, store_info, create_product, ProductDeleteView, cart_add, cart_remove, cart_detail, cart_update

urlpatterns = [
    path('products/<slug:slug>/', ProductDetailView.as_view(), name='product-detail'),
    path('store-info/', store_info, name='store-info'),
    path('create-product/', create_product, name='create-product'),
    path('product/<int:pk>/delete/', ProductDeleteView.as_view(), name='delete-product'),
    path('cart/', cart_detail, name='cart'),
    path('cart/add/<int:product_id>', cart_add, name='cart-add'),
    path('cart/update/<uuid:item_uuid>/', cart_update, name='cart-update'),
    path('cart/remove/<uuid:item_uuid>/', cart_remove, name='cart-remove'),
]
