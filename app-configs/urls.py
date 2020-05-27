"""Pen & Paper Webhelper URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Webhelper P&P API')

urlpatterns = [
                  path('api/v1/admin/', admin.site.urls),
                  path('api/v1/', include('server.urls')),
                  #path('api/v1/auth/', include('rest_framework.urls')),
                  path('api/v1/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
                  path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
                  path('api/v1/docs/',schema_view)
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
