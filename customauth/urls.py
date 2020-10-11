from django.urls import path
from .views import UserLoginView, UserLogoutView, registration

urlpatterns = [
    path('login', UserLoginView.as_view(), name='login'),
    path('logout', UserLogoutView.as_view(), name='logout'),
    path('registration', registration, name='registration'),
]
