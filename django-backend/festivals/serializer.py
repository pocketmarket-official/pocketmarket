from rest_framework import serializers
from festivals.models import Festival
from festivals.models import Join


class FestivalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Festival
        fields = (
            'id',
            'festivalCd',
            'festivalName',
            'startDt',
            'endDt',
            'descriptionHeader',
            'descriptionDetail',
            'joinCount',
            'simulOperCount',
            'imgUrl',
            'innerMapUrl',
            'addr1',
            'addr2',
            'oldAddr',
            'organ',
            'organManager',
            'organPhone',
            'organMail',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class JoinSerializer(serializers.ModelSerializer):

    class Meta:
        model = Join
        fields = (
            'id',
            'festivalCd',
            'seq',
            'storeCd',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )
