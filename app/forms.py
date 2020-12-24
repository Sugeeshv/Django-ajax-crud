from django import forms
from app.models import register

class registerforms(forms.ModelForm):
    name=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Name'}))
    email=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Email'}))
    class Meta:
        model=register
        fields="__all__"