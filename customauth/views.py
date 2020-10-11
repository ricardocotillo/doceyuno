from django.shortcuts import render, redirect
from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth import authenticate, login

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