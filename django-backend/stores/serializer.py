from rest_framework import serializers
from stores.models import Store
from stores.models import Funset
from stores.models import Pos


class StoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Store
        fields = (
            'id',
            'brandCd',
            'storeCd',
            'storeName',
            'storeCeo',
            'bizopNo',
            'tel',
            'mobile',
            'fax',
            'postCd',
            'mail',
            'addr1',
            'addr2',
            'oldAddr',
            'openTm',
            'closeTm',
            'dvYn',
            'useYn',
            'bankCd',
            'bankNo',
            'openDt',
            'closeDt',
            'imgLogoUrl',
            'orgIf',
            'xPosition',
            'yPosition',
            'likeUser',
            'score',
            'description',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )

class FunsetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Funset
        fields = (
            'id',
            'storeCd',
            'tmnId',
            'normVanCd',
            'callFg',
            'ordPrtTy',
            'alrYn',
            'alrTy',
            'alrPntFg',
            'alrUrl',
            'kktAlrCallId',
            'kktAlrAccessKey',
            'kktAlrFailFg',
            'kktAlrId',
            'kktAlrPw',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )

class PosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pos
        fields = (
            'id',
            'storeCd',
            'keymapCd',
            'ordStartNo',
            'ordEndNo',
            'cntPayYn',
            'kktAlrTmplCd',
            'takeOutYn',
            'callNoYn',
            'useYn'
        )