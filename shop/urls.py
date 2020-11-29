from django.urls import path
from . import views

urlpatterns = [
    path('products/<slug:slug>/', views.ProductDetailView.as_view(), name='product-detail'),
    path('store-info/', views.store_info, name='store-info'),
    path('create-product/', views.create_product, name='create-product'),
    path('product/<int:pk>/delete/', views.ProductDeleteView.as_view(), name='delete-product'),
    path('cart/', views.cart_detail, name='cart'),
    path('cart/add/<int:product_id>', views.cart_add, name='cart-add'),
    path('cart/update/<uuid:item_uuid>/', views.cart_update, name='cart-update'),
    path('cart/remove/<uuid:item_uuid>/', views.cart_remove, name='cart-remove'),
    path('get_products_table/', views.get_products_table, name='get-products-table'),
]
