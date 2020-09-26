"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
from django.urls import include
from django.urls import path
from rest_framework import routers
from stores import views as store_views
from festivals import views as festival_views
from brand import views as brand_views

router = routers.DefaultRouter()

router.register(r'stores', store_views.StoreView, 'store')
router.register(r'festivals', festival_views.FestivalView, 'festival')
router.register(r'brand', brand_views.BrandView, 'brand')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
