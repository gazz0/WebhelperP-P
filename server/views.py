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

    def get_permissions(self):
        permission_classes = [AllowAny]
        """if self.action == 'create':
            permission_classes = [AllowAny]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsAdminUser]"""
        return [permission() for permission in permission_classes]