import requests
from django.conf import settings
from django.shortcuts import render, redirect
from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth import login
from django.views.generic import View

from .forms import UserLoginForm, UserRegistrationrForm

class UserLoginView(LoginView):
    redirect_authenticated_user = True
    form_class = UserLoginForm
    template_name = 'customauth/login.html'

class UserLogoutView(LogoutView):
    pass

def registration(req):
    if req.method == 'GET':
        form = UserRegistrationrForm()
        return render(req, 'customauth/registration.html', {'form': form})

    form = UserRegistrationrForm(req.POST)
    if form.is_valid():
        user = form.save()
        login(req, user)
        return redirect('home')
    return render(req, 'customauth/registration.html', {'form': form})

class MercadopagoView(View):

    def get(self, request, *args, **kwargs):
        code = request.GET.get('code')
        state = request.GET.get('state')
        url = f'https://api.mercadopago.com/oauth/token?cliente_secret={settings.MERCADOPAGO_SECRET}'
        res = requests.post()