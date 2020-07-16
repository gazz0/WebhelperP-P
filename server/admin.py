from django.contrib import admin

# Register your models here.

from server.models import User

admin.site.register(User)