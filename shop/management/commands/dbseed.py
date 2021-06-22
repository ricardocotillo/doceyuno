from django.core.management.base import BaseCommand
from shop.models import Store, Color, Size

colors = [
    {
        "cyan": 0,
        "magenta": 0,
        "yellow": 0,
        "black": 0,
        "red": 0,
        "green": 0,
        "blue": 0,
        "alpha": 1,
        "hex_code": "#ffffff",
    },
    {
        "cyan": 0,
        "magenta": 0,
        "yellow": 0,
        "black": 90,
        "red": 26,
        "green": 26,
        "blue": 26,
        "alpha": 1,
        "hex_code": "#1a1a1a",
    },
    {
        "cyan": 18,
        "magenta": 15,
        "yellow": 0,
        "black": 78,
        "red": 10,
        "green": 19,
        "blue": 57,
        "alpha": 1,
        "hex_code": "#0a1339",
    },
    {
        "cyan": 37,
        "magenta": 30,
        "yellow": 0,
        "black": 40,
        "red": 58,
        "green": 75,
        "blue": 152,
        "alpha": 1,
        "hex_code": "#3a4b98"
    },
    {
        "cyan": 0,
        "magenta": 45,
        "yellow": 54,
        "black": 37,
        "red": 160,
        "green": 46,
        "blue": 22,
        "alpha": 1,
        "hex_code": "#a02e16",
    },
    {
        "cyan": 16,
        "magenta": 0,
        "yellow": 14,
        "black": 73,
        "red": 28,
        "green": 69,
        "blue": 34,
        "alpha": 1,
        "hex_code": "#1c4522",
    },
    {
        "cyan": 0,
        "magenta": 65,
        "yellow": 79,
        "black": 6,
        "red": 239,
        "green": 73,
        "blue": 38,
        "alpha": 1,
        "hex_code": "#ef4926",
    },
    {
        "cyan": 13,
        "magenta": 27,
        "yellow": 0,
        "black": 57,
        "red": 76,
        "green": 42,
        "blue": 110,
        "alpha": 1,
        "hex_code": "#4c2a6e",
    },
    {
        "cyan": 0,
        "magenta": 34,
        "yellow": 81,
        "black": 4,
        "red": 246,
        "green": 159,
        "blue": 40,
        "alpha": 1,
        "hex_code": "#f69f28",
    },
    {
        "cyan": 0,
        "magenta": 38,
        "yellow": 23,
        "black": 5,
        "red": 241,
        "green": 143,
        "blue": 182,
        "alpha": 100,
        "hex_code": "#f18fb6",
    },
    {
        "cyan": 29,
        "magenta": 0,
        "yellow": 59,
        "black": 12,
        "red": 151,
        "green": 224,
        "blue": 74,
        "alpha": 100,
        "hex_code": "#97e04a",
    },
    {
        "cyan": 25,
        "magenta": 16,
        "yellow": 0,
        "black": 39,
        "red": 92,
        "green": 115,
        "blue": 156,
        "alpha": 100,
        "hex_code": "#5c739c"
    },
    {
        "cyan": 0,
        "magenta": 0,
        "yellow": 3,
        "black": 75,
        "red": 63,
        "green": 63,
        "blue": 56,
        "alpha": 100,
        "hex_code": "#3f3f38",
    },
    {
        "cyan": 0,
        "magenta": 20,
        "yellow": 20,
        "black": 3,
        "red": 247,
        "green": 195,
        "blue": 195,
        "alpha": 100,
        "hex_code": "#f7c3c3",
    },
    {
        "cyan": 0,
        "magenta": 0,
        "yellow": 0,
        "black": 16,
        "red": 214,
        "green": 213,
        "blue": 213,
        "alpha": 100,
        "hex_code": "#d6d5d5",
    },
]

sizes = [
    {
        "name": "Small",
        "symbol": "S",
    },
    {
        "name": "Medium",
        "symbol": "M",
    },
    {
        "name": "Large",
        "symbol": "L",
    }
]


class Command(BaseCommand):
    help: str = 'Seeds Database with inital data'

    def handle(self, *args, **kwargs):
        Store.objects.create(
            name='Doce y uno',
            base_price='19.99',
            currency='PEN',
            currency_symbol='S/',
            shipping_cost='10.00',
        )

        for color in colors:
            Color.objects.create(**color)

        for size in sizes:
            Size.objects.create(**size)
