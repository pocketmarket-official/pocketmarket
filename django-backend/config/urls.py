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
from rest_framework import routers
#masters
from stores import views as store_views
from festivals import views as festival_views
from users import views as user_views
from brands import views as brand_views
from points import views as point_views
from storeDics import views as storeDic_views
from reviews import views as review_views
from replies import views as reply_views
from items import views as item_views
from cprts import views as cprt_views
from keymaps import views as keymap_views
#trades
from trades import views as trade_views
#kdses
from kdses import views as kds_views
#interfaces
from interfaces import views as interface_views



router = routers.DefaultRouter()

#masters
router.register(r'stores_store', store_views.StoreView, 'store')
router.register(r'stores_funSset', store_views.FunsetView, 'funset')
router.register(r'stores_pos', store_views.PosView, 'pos')
router.register(r'festivals_festival', festival_views.FestivalView, 'festival')
router.register(r'users_user', user_views.UserView, 'user')
router.register(r'users_point', user_views.PointView, 'point')
router.register(r'users_myPlace', user_views.MyPlaceView, 'myPlace')
router.register(r'brands_brand', brand_views.BrandView, 'brand')
router.register(r'points_point', point_views.PointView, 'point')
router.register(r'storeDics_storeDic', storeDic_views.StoreDicView, 'storeDic')
router.register(r'reviews_review', review_views.ReviewView, 'review')
router.register(r'replies_reply', reply_views.ReplyView, 'reply')
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
router.register(r'trades_cashLog', trade_views.CashLogView, 'cashLog')
router.register(r'trades_cardLog', trade_views.CardLogView, 'cardLog')
router.register(r'trades_etcLog', trade_views.EtcLogView, 'etcLog')
router.register(r'trades_standardLog', trade_views.StandardLogView, 'standardLog')
router.register(r'trades_purchaseLog', trade_views.PurchaseLogView, 'purchaseLog')
router.register(r'trades_soldoutLog', trade_views.SoldoutLogView, 'soldoutLog')
router.register(r'trades_cornerStateLog', trade_views.CornerStateLogView, 'cornerStateLog')
# router.register(r'trades_tradeMaker', trade_views.TradeMakerView, 'tradeMaker')
#kdses
router.register(r'kdses_master', kds_views.MasterView, 'master')
router.register(r'kdses_setMaster', kds_views.SetMasterView, 'setMaster')


urlpatterns = [
    path("", include("core.urls")),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('interfaces/', interface_views.InterfaceView, name='interface'),

]
