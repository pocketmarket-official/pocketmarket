from rest_framework import serializers
from cprts.models import Cprt
from cprts.models import Group
from cprts.models import Relation


class CprtSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cprt
        fields = (
            'storeCd',
            'cprtCd',
            'cprtName',
            'useYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = (
            'storeCd',
            'cprtGroupCd',
            'cprtGroupName',
            'useYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class RelationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Relation
        fields = (
            'storeCd',
            'cprtGroupCd',
            'seq',
            'cprtCd',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )
