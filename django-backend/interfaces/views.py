import urllib.request
import json
from brands.models import Brand
from stores.models import Store



def InterfaceView(request):
    try:
        ## compCd
        compCd = 'C0028'
        storeCd = 'S0002'

        ## brands
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
                                                              'useYn':brand_imt.get('USE_YN'),
                                                              'insDt':brand_imt.get('INS_DT'),
                                                              'insUs':brand_imt.get('INS_US'),
                                                              'modDt':brand_imt.get('MOD_DT'),
                                                              'modUs':brand_imt.get('MOD_US')
                                                          })
                if not flag:
                    brand_pktmkt.brandName = brand_imt.get('BRAND_NM')
                    brand_pktmkt.useYn = brand_imt.get('USE_YN')
                    brand_pktmkt.insDt = brand_imt.get('INS_DT')
                    brand_pktmkt.insUs = brand_imt.get('INS_US')
                    brand_pktmkt.modDt = brand_imt.get('MOD_DT')
                    brand_pktmkt.modUs = brand_imt.get('MOD_US')
                    brand_pktmkt.save()

        ##stores

        url = "http://asp-test.imtsoft.me/api/pocketMarket/storesStore?compCd=" + compCd + "&storCd=" + storeCd # json 결과
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read().decode('euc-kr')
            response_body_json = json.loads(response_body)
            for store_imt in response_body_json:
                brand = Brand.objects.get(brandCd = store_imt.get('BRAND_CD'))
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
                                                                     'imgLogoUrl': store_imt.get('IMG_LOGO_URL'),
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
        else:
            print("Error Code:" + rescode)
        return
    except Exception as ex:
        print(ex)


# class InterfaceView(viewsets.ModelViewSet):
#     compCd = '1'