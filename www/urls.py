from django.urls import path
from django.views.generic import TemplateView
from .views import HomeView, home

urlpatterns = [
    path('', home, name='home'),
    path('serviceworker', TemplateView.as_view(template_name='www/serviceworker.js', content_type='application/javascript'), name='serviceworker')
]
