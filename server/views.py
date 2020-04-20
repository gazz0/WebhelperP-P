from django.shortcuts import render
from server.models import User
from server.serializers import UserSerializer
from rest_framework import viewsets, permissions
from rest_framework.permissions import (AllowAny, IsAuthenticated)

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    queryset = User.objects.all()
    serializer_class = UserSerializer