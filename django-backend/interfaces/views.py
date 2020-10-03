import os
import sys
import urllib.request
# from rest_framework import viewsets

# client_id = "YOUR_CLIENT_ID"
# client_secret = "YOUR_CLIENT_SECRET"
# encText = urllib.parse.quote("검색할 단어")


def InterfaceView(request):
    try:
        compCd = 'C0028'
        url = "http://asp-test.imtsoft.me/api/pocketMarket/brandsBrand?compCd=" + compCd  # json 결과
        # url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # xml 결과
        request = urllib.request.Request(url)
        # request.add_header("X-Naver-Client-Id", client_id)
        # request.add_header("X-Naver-Client-Secret", client_secret)
        response = urllib.request.urlopen(request)
        rescode = response.getcode()
        if (rescode == 200):
            response_body = response.read()
            print(response_body.decode('euc-kr'))
        else:
            print("Error Code:" + rescode)
        return
    except Exception as ex:
        print(ex)


# class InterfaceView(viewsets.ModelViewSet):
#     compCd = '1'