from decimal import Decimal
from django import template
register = template.Library()

@register.filter
def decimal_sum(value, arg):
    total = "{:.2f}".format(Decimal(value) + arg)
    return total

@register.filter
def format_to_two(value):
    formatted = '{:.2f}'.format(Decimal(value))
    return formatted