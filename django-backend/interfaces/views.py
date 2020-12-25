import urllib.request
import requests
import json
import os
from brands.models import Brand
from stores.models import Store
from stores.models import Funset
from stores.models import Pos
from keymaps.models import StoreKeymap
from keymaps.models import TouchGroup
from keymaps.models import Keymap
from items.models import Item
from items.models import Set
from items.models import SetOpt
from items.models import ItemAdd
from items.models import AddCat
from items.models import Add
from cprts.models import Cprt
from cprts.models import Group
from cprts.models import Relation
from trades.models import SaleHeader
from trades.models import SaleDetail
from trades.models import CardLog

from django.http import HttpResponse
from django.http import JsonResponse


def MasterDownTotal(request):
    try:
        state = os.environ.get('STATE')
        if state == 'local:start' or state == 'local:dev':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'
        elif state == 'dev':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'
        elif state == 'production':
            domain = 'http://asp.imtsoft.me/api/'
            compCd = 'C0023'
        elif state == 'server:appDeploy':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'

        #error check variable
        errorMsg = ''
        context = ''

        ## brands_brand
        url = domain + "pocketMarket/brandsBrand?compCd=" + compCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for brand_imt in response_body_json:
                brand_pktmkt, flag = Brand.objects.get_or_create(brandCd=brand_imt.get('BRAND_CD'),
                                                                 defaults={
                                                                     'brandName': brand_imt.get('BRAND_NM'),
                                                                     'useYn': brand_imt.get('USE_YN'),
                                                                     'insDt': brand_imt.get('INS_DT'),
                                                                     'insUs': brand_imt.get('INS_US'),
                                                                     'modDt': brand_imt.get('MOD_DT'),
                                                                     'modUs': brand_imt.get('MOD_US')
                                                                 })
                if not flag:
                    brand_pktmkt.brandName = brand_imt.get('BRAND_NM')
                    brand_pktmkt.useYn = brand_imt.get('USE_YN')
                    brand_pktmkt.insDt = brand_imt.get('INS_DT')
                    brand_pktmkt.insUs = brand_imt.get('INS_US')
                    brand_pktmkt.modDt = brand_imt.get('MOD_DT')
                    brand_pktmkt.modUs = brand_imt.get('MOD_US')
                    brand_pktmkt.save()
        else :
            errorMsg = 'brand Down Failure'
            context = 'url=' + url + ' compCd=' + compCd
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

    except Exception as ex:
        print(ex)
        data = {'context': context,
                'errorMsg': errorMsg}
        response = JsonResponse(data)
        return response

##todo get or create 구문에서 비교조건이 pk와 동일한지 체크
def MasterDownView(request):
    try:
        ## values
        posNo = '01'
        ## parameter
        storeCd = request.GET['storeCd']

        state = os.environ.get('STATE')
        if state == 'local:start' or state == 'local:dev':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'
        elif state == 'dev':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'
        elif state == 'production':
            domain = 'http://asp.imtsoft.me/api/'
            compCd = 'C0023'
        elif state == 'server:appDeploy':
            domain = 'http://asp-test.imtsoft.me/api/'
            compCd = 'C0028'

        ## brands_brand
        url = domain + "pocketMarket/brandsBrand?compCd=" + compCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for brand_imt in response_body_json:
                brand_pktmkt, flag = Brand.objects.get_or_create(brandCd=brand_imt.get('BRAND_CD'),
                                                                 defaults={
                                                                     'brandName': brand_imt.get('BRAND_NM'),
                                                                     'useYn': brand_imt.get('USE_YN'),
                                                                     'insDt': brand_imt.get('INS_DT'),
                                                                     'insUs': brand_imt.get('INS_US'),
                                                                     'modDt': brand_imt.get('MOD_DT'),
                                                                     'modUs': brand_imt.get('MOD_US')
                                                                 })
                if not flag:
                    brand_pktmkt.brandName = brand_imt.get('BRAND_NM')
                    brand_pktmkt.useYn = brand_imt.get('USE_YN')
                    brand_pktmkt.insDt = brand_imt.get('INS_DT')
                    brand_pktmkt.insUs = brand_imt.get('INS_US')
                    brand_pktmkt.modDt = brand_imt.get('MOD_DT')
                    brand_pktmkt.modUs = brand_imt.get('MOD_US')
                    brand_pktmkt.save()
        else:
            errorMsg = 'brand Down Failure'
            context = 'url=' + url + ' compCd=' + compCd
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            # response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ##stores_store
        url = domain + "pocketMarket/storesStore?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # Store.objects.filter(storeCd=storeCd).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for store_imt in response_body_json:
                brand = Brand.objects.get(brandCd=store_imt.get('BRAND_CD'))
                store_pktmkt, flag = Store.objects.get_or_create(storeCd=store_imt.get('STOR_CD'),
                                                                 defaults={
                                                                     'brandCd_id': brand.id,
                                                                     'storeName': store_imt.get('STOR_NM'),
                                                                     'storeCeo': store_imt.get('STOR_CEO'),
                                                                     'bizopNo': store_imt.get('BIZOP_NO'),
                                                                     'tel': store_imt.get('STOR_TEL'),
                                                                     'mobile': store_imt.get('STOR_MOBILE'),
                                                                     'fax': store_imt.get('STOR_FAX'),
                                                                     'postCd': store_imt.get('POST_CD'),
                                                                     'mail': store_imt.get('STOR_MAIL'),
                                                                     'addr1': store_imt.get('STOR_ADDR1'),
                                                                     'addr2': store_imt.get('STOR_ADDR2'),
                                                                     'oldAddr': store_imt.get('STOR_OLD_ADDR'),
                                                                     'openTm': store_imt.get('OPEN_TM'),
                                                                     'closeTm': store_imt.get('CLOSE_TM'),
                                                                     'dvYn': store_imt.get('DV_YN'),
                                                                     'bankCd': store_imt.get('BANK_CD'),
                                                                     'bankNo': store_imt.get('BANK_NO'),
                                                                     'openDt': store_imt.get('OPEN_DT'),
                                                                     'closeDt': store_imt.get('CLOSE_DT'),
                                                                     'imgLogoUrl': store_imt.get(
                                                                         'IMG_LOGO_URL'),
                                                                     'orgIf': store_imt.get('ORG_IF'),
                                                                     'useYn': {(store_imt.get('USE_YN')=='1'):'Y'}.get(True,'N'),
                                                                     'insDt': store_imt.get('INS_DT'),
                                                                     'insUs': store_imt.get('INS_US'),
                                                                     'modDt': store_imt.get('MOD_DT'),
                                                                     'modUs': store_imt.get('MOD_US')
                                                                 })
                if not flag:
                    store_pktmkt.brandCd_id = brand.id
                    store_pktmkt.storeName = store_imt.get('STOR_NM')
                    store_pktmkt.storeCeo = store_imt.get('STOR_CEO')
                    store_pktmkt.bizopNo = store_imt.get('BIZOP_NO')
                    store_pktmkt.tel = store_imt.get('STOR_TEL')
                    store_pktmkt.mobile = store_imt.get('STOR_MOBILE')
                    store_pktmkt.fax = store_imt.get('STOR_FAX')
                    store_pktmkt.postCd = store_imt.get('POST_CD')
                    store_pktmkt.mail = store_imt.get('STOR_MAIL')
                    store_pktmkt.addr1 = store_imt.get('STOR_ADDR1')
                    store_pktmkt.addr2 = store_imt.get('STOR_ADDR2')
                    store_pktmkt.oldAddr = store_imt.get('STOR_OLD_ADDR')
                    store_pktmkt.openTm = store_imt.get('OPEN_TM')
                    store_pktmkt.closeTm = store_imt.get('CLOSE_TM')
                    store_pktmkt.dvYn = store_imt.get('DV_YN')
                    store_pktmkt.bankCd = store_imt.get('BANK_CD')
                    store_pktmkt.bankNo = store_imt.get('BANK_NO')
                    store_pktmkt.openDt = store_imt.get('OPEN_DT')
                    store_pktmkt.closeDt = store_imt.get('CLOSE_DT')
                    store_pktmkt.imgLogoUrl = store_imt.get('IMG_LOGO_URL')
                    store_pktmkt.orgIf = store_imt.get('ORG_IF')
                    store_pktmkt.useYn = {(store_imt.get('USE_YN')=='1'):'Y'}.get(True,'N')
                    store_pktmkt.insDt = store_imt.get('INS_DT')
                    store_pktmkt.insUs = store_imt.get('INS_US')
                    store_pktmkt.modDt = store_imt.get('MOD_DT')
                    store_pktmkt.modUs = store_imt.get('MOD_US')
                    store_pktmkt.save()
            ## parameters about store
            store = store_pktmkt
            brand = store.brandCd
        else :
            errorMsg = 'store Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            # response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ##stores_funset
        url = domain + "pocketMarket/storesFunset?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # Funset.objects.filter(storeCd=store).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for funset_imt in response_body_json:
                funset_pktmkt, flag = Funset.objects.get_or_create(storeCd=store,
                                                                   defaults={
                                                                       'tmnId': funset_imt.get('TMN_ID'),
                                                                       'normVanCd': funset_imt.get('NORM_VAN_CD'),
                                                                       'callFg': funset_imt.get('CALL_FG'),
                                                                       'ordPrtTy': funset_imt.get('ORD_PRT_TY'),
                                                                       'alrYn': funset_imt.get('ALR_YN'),
                                                                       'alrTy': funset_imt.get('ALR_TY'),
                                                                       'alrPntFg': funset_imt.get('ALR_PNT_FG'),
                                                                       'alrUrl': funset_imt.get('ALR_URL'),
                                                                       'kktAlrCallId': funset_imt.get(
                                                                           'KKT_ALR_CALL_ID'),
                                                                       'kktAlrAccessKey': funset_imt.get(
                                                                           'KKT_ALR_ACCESS_KEY'),
                                                                       'kktAlrFailFg': funset_imt.get(
                                                                           'KKT_ALR_FAIL_FG'),
                                                                       'kktAlrId': funset_imt.get('KKT_ALR_ID'),
                                                                       'kktAlrPw': funset_imt.get('KKT_ALR_PW'),
                                                                       'insDt': funset_imt.get('INS_DT'),
                                                                       'insUs': funset_imt.get('INS_US'),
                                                                       'modDt': funset_imt.get('MOD_DT'),
                                                                       'modUs': funset_imt.get('MOD_US')
                                                                   })
                if not flag:
                    funset_pktmkt.tmnId = funset_imt.get('TMN_ID')
                    funset_pktmkt.normVanCd = funset_imt.get('NORM_VAN_CD')
                    funset_pktmkt.callFg = funset_imt.get('CALL_FG')
                    funset_pktmkt.ordPrtTy = funset_imt.get('ORD_PRT_TY')
                    funset_pktmkt.alrYn = funset_imt.get('ALR_YN')
                    funset_pktmkt.alrTy = funset_imt.get('ALR_TY')
                    funset_pktmkt.alrPntFg = funset_imt.get('ALR_PNT_FG')
                    funset_pktmkt.alrUrl = funset_imt.get('ALR_URL')
                    funset_pktmkt.kktAlrCallId = funset_imt.get('KKT_ALR_CALL_ID')
                    funset_pktmkt.kktAlrAccessKey = funset_imt.get('KKT_ALR_ACCESS_KEY')
                    funset_pktmkt.kktAlrId = funset_imt.get('KKT_ALR_ID')
                    funset_pktmkt.kktAlrPw = funset_imt.get('KKT_ALR_PW')
                    funset_pktmkt.insDt = funset_imt.get('INS_DT')
                    funset_pktmkt.insUs = funset_imt.get('INS_US')
                    funset_pktmkt.modDt = funset_imt.get('MOD_DT')
                    funset_pktmkt.modUs = funset_imt.get('MOD_US')
                    funset_pktmkt.save()
        else:
            errorMsg = 'storeFunSet Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            # response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ##keymaps_StoreKeymap
        url = domain + "pocketMarket/keymapsStoreKeymap?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # StoreKeymap.objects.filter(storeCd=store).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for storeKeymap_imt in response_body_json:
                storeKeymap_pktmkt, flag = StoreKeymap.objects.get_or_create(storeCd=store,
                                                                             keymapCd=storeKeymap_imt.get('KEYMAP_CD'),
                                                                             defaults={
                                                                                 'keymapName': storeKeymap_imt.get(
                                                                                     'KEYMAP_NM'),
                                                                                 'blankImgUrl': storeKeymap_imt.get(
                                                                                     'BLANK_IMG_URL'),
                                                                                 'useYn': storeKeymap_imt.get(
                                                                                     'USE_YN'),
                                                                                 'insDt': storeKeymap_imt.get(
                                                                                     'INS_DT'),
                                                                                 'insUs': storeKeymap_imt.get(
                                                                                     'INS_US'),
                                                                                 'modDt': storeKeymap_imt.get(
                                                                                     'MOD_DT'),
                                                                                 'modUs': storeKeymap_imt.get(
                                                                                     'MOD_US')
                                                                             })
                if not flag:
                    storeKeymap_pktmkt.keymapName = storeKeymap_imt.get('KEYMAP_NM')
                    storeKeymap_pktmkt.blankimgUrl = storeKeymap_imt.get(
                        'BLANK_IMG_URL')
                    storeKeymap_pktmkt.useYn = storeKeymap_imt.get('USE_YN')
                    storeKeymap_pktmkt.insDt = storeKeymap_imt.get('INS_DT')
                    storeKeymap_pktmkt.insUs = storeKeymap_imt.get('INS_US')
                    storeKeymap_pktmkt.modDt = storeKeymap_imt.get('MOD_DT')
                    storeKeymap_pktmkt.modUs = storeKeymap_imt.get('MOD_US')
                    storeKeymap_pktmkt.save()
        else:
            errorMsg = 'storeKeyMap Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            # response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ##stores_pos
        url = domain + "pocketMarket/storesPos?compCd=" + compCd + "&storCd=" + storeCd + "&posNo=" + posNo  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # Pos.objects.filter(storeCd=store).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for pos_imt in response_body_json:
                storeKeymap = StoreKeymap.objects.get(storeCd=store, keymapCd=pos_imt.get('KEYMAP_CD'))
                pos_pktmkt, flag = Pos.objects.get_or_create(storeCd=store,
                                                             defaults={
                                                                 'keymapCd': storeKeymap,
                                                                 'ordStartNo': pos_imt.get('ORD_ST_NO'),
                                                                 'ordEndNo': pos_imt.get('ORD_END_NO'),
                                                                 'cntPayYn': pos_imt.get('CNT_PAY_YN'),
                                                                 'kktAlrTmplCd': pos_imt.get('KKT_ALR_TMP_CD'),
                                                                 'takeOutYn': pos_imt.get('TAKE_OUT_YN'),
                                                                 'callNoYn': pos_imt.get('CALL_NO_YN'),
                                                                 'useYn': pos_imt.get('USE_YN')
                                                             })
                if not flag:
                    pos_pktmkt.keymapCd = storeKeymap
                    pos_pktmkt.ordStartNo = pos_imt.get('ORD_ST_NO')
                    pos_pktmkt.ordEndNo = pos_imt.get('ORD_END_NO')
                    pos_pktmkt.cntPayYn = pos_imt.get('CNT_PAY_YN')
                    pos_pktmkt.kktAlrTmplCd = pos_imt.get('KKT_ALR_TMPL_CD')
                    pos_pktmkt.takeOutYn = pos_imt.get('TAKE_OUT_YN')
                    pos_pktmkt.callNoYn = pos_imt.get('CALL_NO_YN')
                    pos_pktmkt.useYn = pos_imt.get('USE_YN')
                    pos_pktmkt.save()
        else:
            errorMsg = 'storePos Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ##keymaps_TouchGroup
        storeKeymap = pos_pktmkt.keymapCd
        url = domain + "pocketMarket/keymapsTgrp?compCd=" + compCd + "&storCd=" + storeCd + "&keymapCd=" + storeKeymap.keymapCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # TouchGroup.objects.filter(storeCd=store, keymapCd=storeKeymap).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for touchGroup_imt in response_body_json:
                touchGroup_pktmkt, flag = TouchGroup.objects.get_or_create(storeCd=store,
                                                                           keymapCd=storeKeymap,
                                                                           touchGroupCd=touchGroup_imt.get('GRP_CD'),
                                                                           defaults={
                                                                               'touchGroupName': touchGroup_imt.get(
                                                                                   'GRP_NM'),
                                                                               'imgUrl': touchGroup_imt.get('IMG_URL'),
                                                                               'imgUseYn': touchGroup_imt.get(
                                                                                   'IMG_USE_YN'),
                                                                               'posPage': touchGroup_imt.get('POS_PG'),
                                                                               'posIndex': touchGroup_imt.get(
                                                                                   'POS_IX'),
                                                                               'useYn': touchGroup_imt.get('USE_YN'),
                                                                               'insDt': touchGroup_imt.get('INS_DT'),
                                                                               'insUs': touchGroup_imt.get('INS_US'),
                                                                               'modDt': touchGroup_imt.get('MOD_DT'),
                                                                               'modUs': touchGroup_imt.get('MOD_US')
                                                                           })
                if not flag:
                    touchGroup_pktmkt.touchGroupName = touchGroup_imt.get('GRP_NM')
                    touchGroup_pktmkt.imgUrl = touchGroup_imt.get('IMG_URL')
                    touchGroup_pktmkt.imgUseYn = touchGroup_imt.get('IMG_USE_YN')
                    touchGroup_pktmkt.posPage = touchGroup_imt.get('POS_PG')
                    touchGroup_pktmkt.posIndex = touchGroup_imt.get('POS_IX')
                    touchGroup_pktmkt.useYn = touchGroup_imt.get('USE_YN')
                    touchGroup_pktmkt.insDt = touchGroup_imt.get('INS_DT')
                    touchGroup_pktmkt.insUs = touchGroup_imt.get('INS_US')
                    touchGroup_pktmkt.modDt = touchGroup_imt.get('MOD_DT')
                    touchGroup_pktmkt.modUs = touchGroup_imt.get('MOD_US')
                    touchGroup_pktmkt.save()
        else:
            errorMsg = 'keympaTouchGroup Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ## items_item
        url = domain + "pocketMarket/itemsItem?compCd=" + compCd + "&brandCd=" + brand.brandCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # Item.objects.filter(brandCd=brand).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for item_imt in response_body_json:
                item_pktmkt, flag = Item.objects.get_or_create(itemCd=item_imt.get('ITEM_CD'),
                                                               defaults={
                                                                   'brandCd': brand,
                                                                   'itemName': item_imt.get('ITEM_NM'),
                                                                   'price': item_imt.get('PRIC'),
                                                                   'takeOutPrice': item_imt.get('TAKE_OUT_PRICE'),
                                                                   'setYn': item_imt.get('SET_YN'),
                                                                   'itemFg': item_imt.get('ITEM_FG'),
                                                                   'imgSmallUrl': item_imt.get('IMG_SMALL_URL'),
                                                                   'ordPrtYn': item_imt.get('ORD_PRT_YN'),
                                                                   'ordPrtText': item_imt.get('ORD_PRT_TXT'),
                                                                   'kdsSendYn': item_imt.get('KDS_SEND_YN'),
                                                                   'useYn': item_imt.get('USE_YN'),
                                                                   'insDt': item_imt.get('INS_DT'),
                                                                   'insUs': item_imt.get('INS_US'),
                                                                   'modDt': item_imt.get('MOD_DT'),
                                                                   'modUs': item_imt.get('MOD_US')
                                                               })
                if not flag:
                    item_pktmkt.brandCd = brand
                    item_pktmkt.itemName = item_imt.get('ITEM_NM')
                    item_pktmkt.price = item_imt.get('PRIC')
                    item_pktmkt.takeOutPrice = item_imt.get('TAKE_OUT_PRICE')
                    item_pktmkt.setYn = item_imt.get('SET_YN')
                    item_pktmkt.itemFg = item_imt.get('ITEM_FG')
                    item_pktmkt.imgSmallUrl = item_imt.get('IMG_SMALL_URL')
                    item_pktmkt.ordPrtYn = item_imt.get('ORD_PRT_YN')
                    item_pktmkt.ordPrtText = item_imt.get('ORD_PRT_TXT')
                    item_pktmkt.kdsSendYn = item_imt.get('KDS_SEND_YN')
                    item_pktmkt.useYn = item_imt.get('USE_YN')
                    item_pktmkt.insDt = item_imt.get('INS_DT')
                    item_pktmkt.insUs = item_imt.get('INS_US')
                    item_pktmkt.modDt = item_imt.get('MOD_DT')
                    item_pktmkt.modUs = item_imt.get('MOD_US')
                    item_pktmkt.save()
        else:
            errorMsg = 'item Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ## TODO : set 구성상품 하나 삭제 했을 때 지울 방법이 없는데 그건 어떻게 처리함? - 질문해두었음
        ## items_set
        url = domain + "pocketMarket/itemsSet?compCd=" + compCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for set_imt in response_body_json:
                setItemCd = Item.objects.get(itemCd=set_imt.get('SET_ITEM_CD'))
                set_pktmkt, flag = Set.objects.get_or_create(setItemCd=setItemCd,
                                                             seq=set_imt.get('SEQ'),
                                                             subItemCd=set_imt.get('SUB_ITEM_CD'),
                                                             defaults={
                                                                 'subItemQty': set_imt.get('SUB_ITEM_QTY'),
                                                                 'subItemPrice': set_imt.get('SUB_ITEM_PRIC'),
                                                                 'insDt': set_imt.get('INS_DT'),
                                                                 'insUs': set_imt.get('INS_US'),
                                                                 'modDt': set_imt.get('MOD_DT'),
                                                                 'modUs': set_imt.get('MOD_US')
                                                             })
                if not flag:
                    set_pktmkt.subItemQty = set_imt.get('SUB_ITEM_QTY')
                    set_pktmkt.subItemPrice = set_imt.get('SUB_ITEM_PRIC')
                    set_pktmkt.insDt = set_imt.get('INS_DT')
                    set_pktmkt.insUs = set_imt.get('INS_US')
                    set_pktmkt.modDt = set_imt.get('MOD_DT')
                    set_pktmkt.modUs = set_imt.get('MOD_US')
                    set_pktmkt.save()
        else:
            errorMsg = 'itemSet Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ##todo : set와 마찬가지로 삭제됐을 때 어떻게?

        ## items SetOpt
        url = domain + "pocketMarket/itemsSetopt?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # SetOpt.objects.filter(storeCd=store).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for setOpt_imt in response_body_json:
                subItem = Item.objects.get(itemCd=setOpt_imt.get('SUB_ITEM_CD'))
                setOpt_pktmkt, flag = SetOpt.objects.get_or_create(storeCd=store,
                                                                   subItemCd=subItem,
                                                                   changeItemCd=setOpt_imt.get('CHNG_ITEM_CD'),
                                                                   defaults={
                                                                       'insDt': setOpt_imt.get('INS_DT'),
                                                                       'insUs': setOpt_imt.get('INS_US')
                                                                   })
                if not flag:
                    setOpt_pktmkt.insDt = setOpt_imt.get('INS_DT')
                    setOpt_pktmkt.insUs = setOpt_imt.get('INS_US')
                    setOpt_pktmkt.save()
        else:
            errorMsg = 'setOpt Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ## todo : 얘도 삭제 안됨
        ## items ItemAdd
        url = domain + "pocketMarket/itemsItemadd?compCd=" + compCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for itemAdd_imt in response_body_json:
                itemCd = Item.objects.get(itemCd=itemAdd_imt.get('ITEM_CD'))
                itemAddCd = Item.objects.get(itemCd=itemAdd_imt.get('ADD_ITEM_CD'))
                itemAdd_pktmkt, flag = ItemAdd.objects.get_or_create(itemCd=itemCd,
                                                                     defaults={
                                                                         'itemSort': itemAdd_imt.get('ITEM_SORT'),
                                                                         'insDt': itemAdd_imt.get('INS_DT'),
                                                                         'insUs': itemAdd_imt.get('INS_US')
                                                                     })
                if flag :
                    itemAdd_pktmkt.itemAddCd.add(itemAddCd)
                else :
                    itemAdd_pktmkt.itemAddCd.add(itemAddCd)
                    itemAdd_pktmkt.itemSort = itemAdd_imt.get('ITEM_SORT')
                    itemAdd_pktmkt.insDt = itemAdd_imt.get('INS_DT')
                    itemAdd_pktmkt.insUs = itemAdd_imt.get('INS_US')
                    itemAdd_pktmkt.save()
            else:
                errorMsg = 'itemAdd Down Failure'
                context = 'url=' + url
                data = {'result': '500',
                        'context': context,
                        'errorMsg': errorMsg}
                response = JsonResponse(data)
                # return response
                return HttpResponse(context)

        ## items AddCat
        url = domain + "pocketMarket/itemsAddcat?compCd=" + compCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for addCat_imt in response_body_json:
                addCat_pktmkt, flag = AddCat.objects.get_or_create(addCatCd=addCat_imt.get('ADD_CAT_CD'),
                                                                   defaults={
                                                                       'addCatName': addCat_imt.get('ADD_CAT_NM'),
                                                                       'useYn': addCat_imt.get('USE_YN'),
                                                                       'insDt': addCat_imt.get('INS_DT'),
                                                                       'insUs': addCat_imt.get('INS_US'),
                                                                       'modDt': addCat_imt.get('MOD_DT'),
                                                                       'modUs': addCat_imt.get('MOD_US')
                                                                   })
                if not flag:
                    addCat_pktmkt.addCatName = addCat_imt.get('ADD_CAT_NM')
                    addCat_pktmkt.useYn = addCat_imt.get('USE_YN')
                    addCat_pktmkt.insDt = addCat_imt.get('INS_DT')
                    addCat_pktmkt.insUs = addCat_imt.get('INS_US')
                    addCat_pktmkt.modDt = addCat_imt.get('MOD_DT')
                    addCat_pktmkt.modUs = addCat_imt.get('MOD_US')
                    addCat_pktmkt.save()
        else:
            errorMsg = 'itemAddCat Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ## todo : 얘도 삭제 안됨
        ## itmes_Add
        url = domain + "pocketMarket/itemsAdd?compCd=" + compCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for add_imt in response_body_json:
                addCat = AddCat.objects.get(addCatCd=add_imt.get('ADD_CAT_CD'))
                addItem = Item.objects.get(itemCd=add_imt.get('ADD_ITEM_CD'))
                add_pktmkt, flag = Add.objects.get_or_create(addCatCd=addCat,
                                                             addItemCd=addItem,
                                                             defaults={
                                                                 'insDt': add_imt.get('INS_DT'),
                                                                 'insUs': add_imt.get('INS_US'),
                                                                 'modDt': add_imt.get('MOD_DT'),
                                                                 'modUs': add_imt.get('MOD_US')
                                                             })
                if not flag:
                    add_pktmkt.insDt = add_imt.get('INS_DT')
                    add_pktmkt.insUs = add_imt.get('INS_US')
                    add_pktmkt.modDt = add_imt.get('MOD_DT')
                    add_pktmkt.modUs = add_imt.get('MOD_US')
                    add_pktmkt.save()
        else:
            errorMsg = 'itemAdd Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ## cprts_cprt
        url = domain + "pocketMarket/cprtsMaster?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # Cprt.objects.filter(storeCd=store).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for cprt_imt in response_body_json:
                cprt_pktmkt, flag = Cprt.objects.get_or_create(storeCd=store,
                                                               cprtCd=cprt_imt.get('RPRT_CD'),
                                                               defaults={
                                                                   'cprtName': cprt_imt.get('RPRT_NM'),
                                                                   'useYn': cprt_imt.get('USE_YN'),
                                                                   'insDt': cprt_imt.get('INS_DT'),
                                                                   'insUs': cprt_imt.get('INS_US'),
                                                                   'modDt': cprt_imt.get('MOD_DT'),
                                                                   'modUs': cprt_imt.get('MOD_US')
                                                               })
                if not flag:
                    cprt_pktmkt.cprtName = cprt_imt.get('RPRT_NM')
                    cprt_pktmkt.useYn = cprt_imt.get('USE_YN')
                    cprt_pktmkt.insDt = cprt_imt.get('INS_DT')
                    cprt_pktmkt.insUs = cprt_imt.get('INS_US')
                    cprt_pktmkt.modDt = cprt_imt.get('MOD_DT')
                    cprt_pktmkt.modUs = cprt_imt.get('MOD_US')
                    cprt_pktmkt.save()
        else:
            errorMsg = 'cprtMaster Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ## cprts_group
        url = domain + "pocketMarket/cprtsGrp?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # Group.objects.filter(storeCd=store).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for group_imt in response_body_json:
                group_pktmkt, flag = Group.objects.get_or_create(storeCd=store,
                                                                 cprtGroupCd=group_imt.get('RPRT_GRP_CD'),
                                                                 defaults={
                                                                     'cprtGroupName': group_imt.get('RPRT_GRP_NM'),
                                                                     'useYn': group_imt.get('USE_YN'),
                                                                     'insDt': group_imt.get('INS_DT'),
                                                                     'insUs': group_imt.get('INS_US'),
                                                                     'modDt': group_imt.get('MOD_DT'),
                                                                     'modUs': group_imt.get('MOD_US')
                                                                 })
                if not flag:
                    group_pktmkt.cprtGroupName = group_imt.get('RPRT_GRP_NM')
                    group_pktmkt.useYn = group_imt.get('USE_YN')
                    group_pktmkt.insDt = group_imt.get('INS_DT')
                    group_pktmkt.insUs = group_imt.get('INS_US')
                    group_pktmkt.modDt = group_imt.get('MOD_DT')
                    group_pktmkt.modUs = group_imt.get('MOD_US')
                    group_pktmkt.save()
        else:
            errorMsg = 'cprtGroup Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ## cprts_relation
        url = domain + "pocketMarket/cprtsCprt?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # Relation.objects.filter(storeCd=store).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for relation_imt in response_body_json:
                group = Group.objects.get(storeCd=store, cprtGroupCd=relation_imt.get('RPRT_GRP_CD'))
                cprt = Cprt.objects.get(storeCd=store, cprtCd=relation_imt.get('RPRT_CD'))
                relation_pktmkt, flag = Relation.objects.get_or_create(storeCd=store,
                                                                       cprtGroupCd=group,
                                                                       cprtCd=cprt,
                                                                       defaults={
                                                                           'insDt': relation_imt.get('INS_DT'),
                                                                           'insUs': relation_imt.get('INS_US'),
                                                                           'modDt': relation_imt.get('MOD_DT'),
                                                                           'modUs': relation_imt.get('MOD_US')
                                                                       })
                if not flag:
                    relation_pktmkt.insDt = relation_imt.get('INS_DT')
                    relation_pktmkt.insUs = relation_imt.get('INS_US')
                    relation_pktmkt.modDt = relation_imt.get('MOD_DT')
                    relation_pktmkt.modUs = relation_imt.get('MOD_US')
                    relation_pktmkt.save()
        else:
            errorMsg = 'cprtRelation Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        ## keymaps_keymap
        url = domain + "pocketMarket/keymapsKeymap?compCd=" + compCd + "&storCd=" + storeCd + "&keymapCd=" + storeKeymap.keymapCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            # Keymap.objects.filter(storeCd=store, keymapCd=storeKeymap.keymapCd).delete()
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for keymap_imt in response_body_json:
                touchGroup = TouchGroup.objects.get(keymapCd=storeKeymap,
                                                    touchGroupCd=keymap_imt.get('GRP_CD'))
                item = Item.objects.get(itemCd=keymap_imt.get('ITEM_CD'))
                keymap_pktmkt, flag = Keymap.objects.get_or_create(storeCd=store,
                                                                   keymapCd=storeKeymap,
                                                                   touchGroupCd=touchGroup,
                                                                   posPage=keymap_imt.get('POS_PG'),
                                                                   posIndex=keymap_imt.get('POS_IX'),
                                                                   itemCd=item,
                                                                   defaults={
                                                                       'soldoutYn': keymap_imt.get(
                                                                           'SOLD_OUT_YN'),
                                                                       'cprtGroupCd': keymap_imt.get(
                                                                           'RPRT_GRP_CD'),
                                                                       'dispYn': keymap_imt.get('DISP_YN'),
                                                                       'expectCnt': keymap_imt.get(
                                                                           'EXPECT_CNT'),
                                                                       'insDt': keymap_imt.get('INS_DT'),
                                                                       'insUs': keymap_imt.get('INS_US'),
                                                                       'modDt': keymap_imt.get('MOD_DT'),
                                                                       'modUs': keymap_imt.get('MOD_US')
                                                                   })
                if not flag:
                    keymap_pktmkt.soldoutYn = keymap_imt.get('SOLD_OUT_YN')
                    keymap_pktmkt.cprtGroupCd = keymap_imt.get('RPRT_GRP_CD')
                    keymap_pktmkt.dispYn = keymap_imt.get('DISP_YN')
                    keymap_pktmkt.expectCnt = keymap_imt.get('EXPECT_CNT')
                    keymap_pktmkt.insDt = keymap_imt.get('INS_DT')
                    keymap_pktmkt.insUs = keymap_imt.get('INS_US')
                    keymap_pktmkt.modDt = keymap_imt.get('MOD_DT')
                    keymap_pktmkt.modUs = keymap_imt.get('MOD_US')
                    keymap_pktmkt.save()
        else:
            errorMsg = 'keymap Down Failure'
            context = 'url=' + url
            data = {'result': '500',
                    'context': context,
                    'errorMsg': errorMsg}
            response = JsonResponse(data)
            # return response
            return HttpResponse(context)

        return HttpResponse(store.storeName + '매장의 마스터 수신이 완료되었습니다.')

    except Exception as ex:
        print(ex)
        return HttpResponse(store.storeName + '매장의 마스터 수신이 완료되었습니다.')

# class InterfaceView(viewsets.ModelViewSet):
#     compCd = '1'

def TradeUploadView(request):
    try:
        saleHeader = []
        saleHeaderRow = {}
        saleDetail = []
        saleDetailRow = {}
        cardLog = []
        cardLogRow = {}

        saleHeader.append(saleHeaderRow)
        saleDetail.append(saleDetailRow)
        cardLog.append(cardLogRow)

        trData = {
            'T_SALE_H': saleHeader,
            'T_SALE_D': saleDetail,
            'cardLog': cardLog
        }
        request = requests.post('/api/outer/sale', data=saleHeader)

    except Exception as ex:
        print(ex)
