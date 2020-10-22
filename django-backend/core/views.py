import os
import requests
from django.contrib.auth import login
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.shortcuts import reverse
from users.models import User

# Create your views here.


class KakaoException(Exception):
    pass

def kakao_login(request):
    ''' use kakao oauth '''
    client_id = os.environ.get("KAKAO_KEY")
    redirect_uri = "http://127.0.0.1:8000/login/kakao/callback"
    return redirect(
        f"https://kauth.kakao.com/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code"
    )


def kakao_callback(request):
    ''' sign in and log in with kakao '''
    try:
        code = request.GET.get("code", None)
        client_id = os.environ.get("KAKAO_KEY")
        client_secret = os.environ.get("KAKAO_SECRET")
        redirect_uri = "http://127.0.0.1:8000/login/kakao/callback"
        if code is not None:
            # get access_token with the code
            request_api = requests.post(
                f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={client_id}&client_secret={client_secret}&redirect_uri={redirect_uri}&code={code}",
            )
            result_json = request_api.json()
            error = result_json.get("error", None)
            if error is not None:
                raise KakaoException()
            else:
                access_token = result_json.get("access_token")
                profile_request = requests.get(
                    "https://kapi.kakao.com/v2/user/me",
                    headers={
                        "Authorization": f"Bearer {access_token}",
                    },
                )
                profile_json = profile_request.json()
                kakao_id = profile_json.get("id")
                if kakao_id is not None:
                    email = profile_json.get("kakao_account")["email"]
                    if email is None:
                        raise KakaoException()
                    try:
                        user = User.objects.get(email=email)
                    except User.DoesNotExist:
                        user = User.objects.create(
                            email=email,
                        )
                        user.set_unusable_password()
                        user.save()
                    login(request, user)
                    return redirect(reverse(""))
                else:
                    raise KakaoException()
    except KakaoException:
        return HttpResponseRedirect("http://localhost:3000/login")
