
from rest_framework import routers, renderers
from server import views

router = routers.DefaultRouter()
router.register('users', views.UserViewSet)

urlpatterns = router.urls