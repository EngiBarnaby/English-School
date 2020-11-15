from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, CustomUserViewSets, get_user_data

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profile', CustomUserViewSets)


urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
    path('stats/', get_user_data, name="get_user_data"),
]