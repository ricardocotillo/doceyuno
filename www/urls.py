from django.urls import path
from .views import HomeView, home

urlpatterns = [
    path('', home, name='home'),
]
