from rest_framework import serializers
from users.models import User
from users.models import Point
from users.models import MyPlace


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'email',
        )

class PointSerializer(serializers.ModelSerializer):

    class Meta:
        model = Point
        fields = {
            'user',
            'remainPoint',
            'totExchangeLike',
            'totExchangePoint',
            'totSpendPoint',
            'lastExchangeDate',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        }

#todo : 왜안되는지 모르겠음
class MyPlaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = MyPlace
        fields = {
            'user',
            'seq',
            'addrName',
            'addr1',
            'addr2',
            'oldAddr',
            'xPosition',
            'yPosition',
            'defaultYn',
            'deleteYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        }