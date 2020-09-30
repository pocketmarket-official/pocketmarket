from rest_framework import serializers
from cprts.models import Cprt


class CprtSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cprt
        fields = (
            'cprtName',
        )
