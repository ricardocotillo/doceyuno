from django.urls import path
from .views import ProductCustomizerView

urlpatterns = [
    path('', ProductCustomizerView.as_view(), name='product-customizer'),
]
