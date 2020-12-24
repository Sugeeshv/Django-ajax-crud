import django_filters
from app.models import *

class regfilter(django_filters.Filter):
    class Meta:
        model=register
        fields='__all__'