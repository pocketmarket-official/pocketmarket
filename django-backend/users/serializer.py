from rest_framework import serializers
from users.models import User
from users.models import Point


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