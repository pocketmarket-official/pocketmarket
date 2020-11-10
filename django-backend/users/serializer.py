from rest_framework import serializers
from users.models import User
from users.models import Point
from users.models import MyPlace
from users.models import ImageTest


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'id',
            'email',
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

class ImageTestSerializer(serializers.ModelSerializer):

    class Meta:
        model = ImageTest
        fields = [
            'image'
        ]