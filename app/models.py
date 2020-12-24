from django.db import models
from rest_framework import serializers

# Create your models here.

class register(models.Model):
    name=models.CharField(max_length=20)
    email=models.CharField(max_length=20)
    class Meta:
        db_table="register"


class registerserilizer(serializers.Serializer):
    id=serializers.IntegerField()
    name=serializers.CharField()
    email=serializers.CharField()