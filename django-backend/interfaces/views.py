import urllib.request
import json
from brands.models import Brand
from stores.models import Store
from stores.models import Funset
from stores.models import Pos
from keymaps.models import StoreKeymap


def InterfaceView(request):
    try:
        ## constant
        compCd = 'C0028'
        posNo = '91'
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

        ##stores_funset
        url = "http://asp-test.imtsoft.me/api/pocketMarket/storesFunset?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for funset_imt in response_body_json:
                store = Store.objects.get(storeCd=funset_imt.get('STOR_CD'))
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

        ##stores_funset
        url = "http://asp-test.imtsoft.me/api/pocketMarket/storesFunset?compCd=" + compCd + "&storCd=" + storeCd  # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for funset_imt in response_body_json:
                store = Store.objects.get(storeCd=funset_imt.get('STOR_CD'))
                funset_pktmkt, flag = Funset.objects.get_or_create(storeCd=store,
                                                                   defaults={
                                                                       'tmnId': funset_imt.get('TMN_ID'),
                                                                       'normVanCd': funset_imt.get(
                                                                           'NORM_VAN_CD'),
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
                store = Store.objects.get(storeCd=storeKeymap_imt.get('STOR_CD'))
                storeKeymap_pktmkt, flag = StoreKeymap.objects.get_or_create(storeCd=store,
                                                                             defaults={
                                                                                 'keymapCd': storeKeymap_imt.get(
                                                                                     'KEYMAP_CD'),
                                                                                 'keymapName': storeKeymap_imt.get(
                                                                                     'KEYMAP_NM'),
                                                                                 'blankImgUrl': storeKeymap_imt.get(
                                                                                     'BLANK_IMG_URL'),
                                                                                 'useYn': storeKeymap_imt.get('USE_YN'),
                                                                                 'insDt': storeKeymap_imt.get('INS_DT'),
                                                                                 'insUs': storeKeymap_imt.get('INS_US'),
                                                                                 'modDt': storeKeymap_imt.get('MOD_DT'),
                                                                                 'modUs': storeKeymap_imt.get('MOD_US')
                                                                             })
                if not flag:
                    storeKeymap_pktmkt.keymapCd = storeKeymap_imt.get('KEYMAP_CD')
                    storeKeymap_pktmkt.keymapName = storeKeymap_imt.get('KEYMAP_NM')
                    storeKeymap_pktmkt.blankimgUrl = storeKeymap_imt.get(
                        'BLANK_IMG_URL')
                    storeKeymap_pktmkt.useYn = storeKeymap_imt.get('USE_YN')
                    storeKeymap_pktmkt.insDt = storeKeymap_imt.get('INS_DT')
                    storeKeymap_pktmkt.insUs = storeKeymap_imt.get('INS_US')
                    storeKeymap_pktmkt.modDt = storeKeymap_imt.get('MOD_DT')
                    storeKeymap_pktmkt.modUs = storeKeymap_imt.get('MOD_US')
                    storeKeymap_pktmkt.save()

        # TODO have to complete after keymap

        # ##stores_pos
        # url = "http://asp-test.imtsoft.me/api/pocketMarket/storesPos?compCd=" + compCd + "&storCd=" + storeCd + "&posNo=" + posNo  # json 결과
        # request = urllib.request.Request(url)
        # response = urllib.request.urlopen(request)
        # rescode = response.getcode()
        # if (rescode == 200):
        #     response_body = response.read().decode('euc-kr')
        #     response_body_json = json.loads(response_body)
        #     for pos_imt in response_body_json:
        #         store = Store.objects.get(storeCd=pos_imt.get('STOR_CD'))
        #         pos_pktmkt, flag = Pos.objects.get_or_create(storeCd=store,
        #                                                         defaults={
        #                                                             'keymapCd': pos_imt.get(),
        #
        #                                                             'insDt': pos_imt.get('INS_DT'),
        #                                                             'insUs': pos_imt.get('INS_US'),
        #                                                             'modDt': pos_imt.get('MOD_DT'),
        #                                                             'modUs': pos_imt.get('MOD_US')
        #                                                         })
        #         if not flag:
        #             pos_pktmkt.tmnId = pos_imt.get('TMN_ID')
        #             pos_pktmkt.normVanCd = pos_imt.get('NORM_VAN_CD')
        #             pos_pktmkt.callFg = pos_imt.get('CALL_FG')
        #             pos_pktmkt.ordPrtTy = pos_imt.get('ORD_PRT_TY')
        #             pos_pktmkt.alrYn = pos_imt.get('ALR_YN')
        #             pos_pktmkt.alrTy = pos_imt.get('ALR_TY')
        #             pos_pktmkt.alrPntFg = pos_imt.get('ALR_PNT_FG')
        #             pos_pktmkt.alrUrl = pos_imt.get('ALR_URL')
        #             pos_pktmkt.kktAlrCallId = pos_imt.get('KKT_ALR_CALL_ID')
        #             pos_pktmkt.kktAlrAccessKey = pos_imt.get('KKT_ALR_ACCESS_KEY')
        #             pos_pktmkt.kktAlrId = pos_imt.get('KKT_ALR_ID')
        #             pos_pktmkt.kktAlrPw = pos_imt.get('KKT_ALR_PW')
        #             pos_pktmkt.insDt = pos_imt.get('INS_DT')
        #             pos_pktmkt.insUs = pos_imt.get('INS_US')
        #             pos_pktmkt.modDt = pos_imt.get('MOD_DT')
        #             pos_pktmkt.modUs = pos_imt.get('MOD_US')
        #             pos_pktmkt.save()

        else:
            print("Error Code:" + rescode)
        return
    except Exception as ex:
        print(ex)

# class InterfaceView(viewsets.ModelViewSet):
#     compCd = '1'
