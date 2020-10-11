from django.urls import path

from .views import AccountView

urlpatterns = [
    path('dashboard/', AccountView.as_view(), name='dashboard')
]
