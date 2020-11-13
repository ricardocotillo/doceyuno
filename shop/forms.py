from django import forms
from .models import Tshirt, Size

class TshirtForm(forms.ModelForm):
    class Meta:
        model = Tshirt
        fields = ['name', 'description', 'price', 'default_color', 'colors']


class CartAddProductForm(forms.Form):
    PRODUCT_QUANTITY_CHOICES = [(i, str(i)) for i in range(1, 26)]
    PRODUCT_SIZES_CHOICES = []
    try:
        PRODUCT_SIZES_CHOICES = [(s.symbol, s.name) for s in list(Size.objects.all())]
    except:
        pass

    quantity = forms.TypedChoiceField(choices=PRODUCT_QUANTITY_CHOICES, coerce=int, widget=forms.NumberInput(attrs={'class': 'form-control'}))
    size = forms.ChoiceField(choices=PRODUCT_SIZES_CHOICES, widget=forms.Select(attrs={'class': 'form-control'}))
    color = forms.CharField(widget=forms.HiddenInput)
    update = forms.BooleanField(required=False, initial=False, widget=forms.HiddenInput)