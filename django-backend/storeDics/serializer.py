from rest_framework import serializers
from storeDics.models import StoreDic


class StoreDicSerializer(serializers.ModelSerializer):

    class Meta:
        model = StoreDic
        fields = (
            'storeDicName',
        )
