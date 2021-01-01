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
#default
from django.contrib import admin
from django.urls import include
from django.urls import path
# from django.urls import re_path
from rest_framework import routers
#react deployment
# from django.views.generic import TemplateView
from core import views as core_views
#masters
from stores import views as store_views
from festivals import views as festival_views
from users import views as user_views
from brands import views as brand_views
from reviews import views as review_views
from items import views as item_views
from cprts import views as cprt_views
from keymaps import views as keymap_views
#trades
from trades import views as trade_views
#kdses
from kdses import views as kds_views
#interfaces
from interfaces import views as interface_views
from django.urls import re_path
from django.views.generic import TemplateView

from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()

#storeLike
path("storeLike/", core_views.storeLike),

#masters
router.register(r'stores_store', store_views.StoreView, 'store')
router.register(r'stores_funSset', store_views.FunsetView, 'funset')
router.register(r'stores_pos', store_views.PosView, 'pos')
router.register(r'stores_storeDic', store_views.StoreDicView, 'storeDic')
router.register(r'stores_storeLike', store_views.StoreLikeView, 'storeLike')

router.register(r'festivals_festival', festival_views.FestivalView, 'festival')
router.register(r'festivals_join', festival_views.JoinView, 'join')

router.register(r'users_user', user_views.UserView, 'user')
router.register(r'users_point', user_views.PointView, 'point')
router.register(r'users_myPlace', user_views.MyPlaceView, 'myPlace')
router.register(r'users_business', user_views.BusinessView, 'business')
router.register(r'users_question', user_views.QuestionView, 'question')

router.register(r'brands_brand', brand_views.BrandView, 'brand')

router.register(r'reviews_review', review_views.ReviewView, 'review')
router.register(r'reviews_reply', review_views.ReplyView, 'reply')

router.register(r'items_item', item_views.ItemView, 'item')
router.register(r'items_set', item_views.SetView, 'set')
router.register(r'items_setOpt', item_views.SetOptView, 'setOpt')
router.register(r'items_itemAdd', item_views.ItemAddView, 'itemAdd')
router.register(r'items_add', item_views.AddView, 'add')

router.register(r'cprts_cprt', cprt_views.CprtView, 'cprt')
router.register(r'cprts_group', cprt_views.GroupView, 'group')
router.register(r'cprts_relation', cprt_views.RelationView, 'relation')

router.register(r'keymaps_storeKeymap', keymap_views.StoreKeymapView, 'storeKeymap')
router.register(r'keymaps_touchGroup', keymap_views.TouchGroupView, 'touchGroup')
router.register(r'keymaps_keymap', keymap_views.KeymapView, 'keymap')
#trades
router.register(r'trades_saleHeader', trade_views.SaleHeaderView, 'saleHeader')
router.register(r'trades_saleDetail', trade_views.SaleDetailView, 'saleDetail')
# router.register(r'trades_cashLog', trade_views.CashLogView, 'cashLog')
router.register(r'trades_cardLog', trade_views.CardLogView, 'cardLog')
# router.register(r'trades_etcLog', trade_views.EtcLogView, 'etcLog')
# router.register(r'trades_standardLog', trade_views.StandardLogView, 'standardLog')
router.register(r'trades_purchaseLog', trade_views.PurchaseLogView, 'purchaseLog')
router.register(r'trades_soldoutLog', trade_views.SoldoutLogView, 'soldoutLog')
router.register(r'trades_ErrorLog', trade_views.ErrorLogView, 'ErrorLog')
# router.register(r'trades_tradeMaker', trade_views.TradeMakerView, 'tradeMaker')
router.register(r'trades_test', trade_views.TestView, 'test')
#kdses
router.register(r'kdses_master', kds_views.MasterView, 'master')
router.register(r'kdses_setMaster', kds_views.SetMasterView, 'setMaster')
router.register(r'kdses_kdsHeader', kds_views.KdsHeaderView, 'kdsHeader')
router.register(r'kdses_kdsDetail', kds_views.KdsDetailView, 'kdsDetail')


urlpatterns = [
    path("", include("core.urls")),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('masterDown/', interface_views.MasterDownView, name='masterDown'),
    path('storeLike/', core_views.storeLike, name='storeLike'),
    re_path(r'^(?:.*)?$', TemplateView.as_view(template_name="index.html"), name="index"), # regex - everything else
]
