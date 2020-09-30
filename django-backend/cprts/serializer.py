from rest_framework import serializers
from cprts.models import Master


class MasterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Master
        fields = (
            'cprtName',
        )
