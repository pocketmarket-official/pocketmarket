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
from users import views as user_views
from brands import views as brand_views
from points import views as point_views
from storeLikes import views as storeLike_views
from storeDics import views as storeDic_views
from myplaces import views as myplace_views
from reviews import views as review_views
from reviewLikes import views as reviewLike_views
from replies import views as reply_views
from items import views as item_views
from cprts import views as cprt_views

router = routers.DefaultRouter()

router.register(r'stores_store', store_views.StoreView, 'store')
router.register(r'festivals_festival', festival_views.FestivalView, 'festival')
router.register(r'users_user', user_views.UserView, 'user')
router.register(r'brands_brand', brand_views.BrandView, 'brand')
router.register(r'points_point', point_views.PointView, 'point')
router.register(r'storeLikes_storelike', storeLike_views.StoreLikeView, 'storeLike')
router.register(r'storeDics_storeDic', storeDic_views.StoreDicView, 'storeDic')
router.register(r'myplaces_myplace', myplace_views.MyplaceView, 'myplace')
router.register(r'reviews_review', review_views.ReviewView, 'review')
router.register(r'reviewLikes_reviewLike', reviewLike_views.ReviewLikeView, 'reviewLike')
router.register(r'replies_reply', reply_views.ReplyView, 'reply')
router.register(r'items_item', item_views.ItemView, 'item')
router.register(r'cprts_cprt', cprt_views.CprtView, 'cprt')
router.register(r'cprts_group', cprt_views.GroupView, 'group')
router.register(r'cprts_relation', cprt_views.RelationView, 'relation')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
