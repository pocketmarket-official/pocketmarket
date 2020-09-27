from rest_framework import serializers
from myplaces.models import Myplace


class MyplaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Myplace
        fields = (
            'myplaceName',
        )
