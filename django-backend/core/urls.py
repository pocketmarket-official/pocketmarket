from django.urls import path
from core import views


urlpatterns = [
    path("login/kakao/callback/", views.kakao_callback, name="kakao-callback"),
    path("trade/", views.trade),
    path("saveToken/", views.saveToken),
    path("saveTokenStore/", views.saveTokenStore),
    path("pushSend_makeComplete/", views.pushSend_makeComplete),
]
