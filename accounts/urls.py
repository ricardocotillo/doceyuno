from django.urls import path

from .views import AccountView, WithdrawalView

app_name = 'accounts'

urlpatterns = [
    path('dashboard/', AccountView.as_view(), name='dashboard'),
    path('withdrawal/', WithdrawalView.as_view(), name='withdrawal')
]
