from django.shortcuts import render
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView


class ProductCustomizerView(LoginRequiredMixin, TemplateView):
    template_name = "product_customizer/product_customizer.html"