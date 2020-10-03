import urllib.request
import json
from brands.models import Brand



def InterfaceView(request):
    try:
        ## compCd
        compCd = 'C0028'

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
        else:
            print("Error Code:" + rescode)
        return
    except Exception as ex:
        print(ex)


# class InterfaceView(viewsets.ModelViewSet):
#     compCd = '1'