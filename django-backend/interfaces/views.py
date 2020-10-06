import urllib.request
import json
from brands.models import Brand
from stores.models import Store
from stores.models import Funset
from stores.models import Pos
from keymaps.models import StoreKeymap
from keymaps.models import TouchGroup
from items.models import Item


def InterfaceView(request):
    try:
        ## constant
        compCd = 'C0028'
        posNo = '01'
        ## parameter
        storeCd = 'S0002'

        ## brands_brand
        url = "http://asp-test.imtsoft.me/api/pocketMarket/brandsBrand?compCd=" + compCd  # json 결과
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

        ##stores_store
        url = "http://asp-test.imtsoft.me/api/pocketMarket/storesStore?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
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
                                                                     'useYn': store_imt.get('USE_YN'),
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
                    store_pktmkt.useYn = store_imt.get('USE_YN')
                    store_pktmkt.insDt = store_imt.get('INS_DT')
                    store_pktmkt.insUs = store_imt.get('INS_US')
                    store_pktmkt.modDt = store_imt.get('MOD_DT')
                    store_pktmkt.modUs = store_imt.get('MOD_US')
                    store_pktmkt.save()
            ## parameters about store
            store = store_pktmkt
            brandCd = store.brandCd.brandCd

        ##stores_funset
        url = "http://asp-test.imtsoft.me/api/pocketMarket/storesFunset?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
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

        ##keymaps_StoreKeymap
        url = "http://asp-test.imtsoft.me/api/pocketMarket/keymapsStoreKeymap?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
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

        ##stores_pos
        url = "http://asp-test.imtsoft.me/api/pocketMarket/storesPos?compCd=" + compCd + "&storCd=" + storeCd + "&posNo=" + posNo  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for pos_imt in response_body_json:
                storeKeymap = StoreKeymap.objects.get(keymapCd=pos_imt.get('KEYMAP_CD'))
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

        ##keymaps_Tgrp
        keymapCd = pos_pktmkt.keymapCd
        url = "http://asp-test.imtsoft.me/api/pocketMarket/keymapsTgrp?compCd=" + compCd + "&storCd=" + storeCd + "&keymapCd=" + keymapCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for touchGroup_imt in response_body_json:
                keymap = StoreKeymap.objects.get(storeCd=store, keymapCd=keymapCd)
                touchGroup_pktmkt, flag = TouchGroup.objects.get_or_create(storeCd=store, keymapCd=keymap,
                                                                           groupCd=touchGroup_imt.get('GRP_CD'),
                                                                           defaults={
                                                                               'groupName': touchGroup_imt.get(
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
                    touchGroup_pktmkt.groupName = touchGroup_imt.get('GRP_NM')
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

        ## items_item
        url = "http://asp-test.imtsoft.me/api/pocketMarket/itemsItem?compCd=" + compCd + "&brandCd=" + brandCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for item_imt in response_body_json:
                brand = Brand.objects.get(brandCd=brandCd)
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

        ## items_set
        url = "http://asp-test.imtsoft.me/api/pocketMarket/itemsSet?compCd=" + compCd  # json 결과
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
            print("Error Code:" + rescode)
        return
    except Exception as ex:
        print(ex)

# class InterfaceView(viewsets.ModelViewSet):
#     compCd = '1'
