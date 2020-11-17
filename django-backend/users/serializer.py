from rest_framework import serializers
from users.models import User
from users.models import Point
from users.models import MyPlace
from users.models import Business



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'email',
            'profileName',
            'profileImage',
        )

class PointSerializer(serializers.ModelSerializer):

    class Meta:
        model = Point
        fields = (
            'id',
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
        )

class MyPlaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = MyPlace
        fields = (
            'id',
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
        )

class BusinessSerializer(serializers.ModelSerializer):

    class Meta:
        model = Business
        fields = (
            'user',
            'seq',
            'store',
            'bizNo',
            'bizName',
            'openDttm',
            'registerNo',
            'bizAddr',
            'storeAddr',
            'orderYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )
