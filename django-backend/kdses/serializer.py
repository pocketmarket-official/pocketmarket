from rest_framework import serializers
from kdses.models import Master
from kdses.models import SetMaster
from kdses.models import KdsHeader
from kdses.models import KdsDetail


class MasterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Master
        fields = (
            'storeCd',
            'refreshTime',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )

class SetMasterSerializer(serializers.ModelSerializer):

    class Meta:
        model = SetMaster
        fields = (
            'storeCd',
            'cprtGroupCd',
            'monitorFlag',
            'summaryYn',
            'fontSize',
            'orderExpandYn',
            'soundYn',
            'backRgb',
            'foreRgb',
            'revertRgb',
            'voidRgb',
            'eatInRgb',
            'takeOutRgb',
            'deliveryRgb',
            'driveThruRgb',
            'preOrderRgb',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class KdsHeaderSerializer(serializers.ModelSerializer):

    class Meta:
        model = KdsHeader
        fields = (
            'storeCd',
            'saleDt',
            'posNo',
            'billNo',
            'orderStatus',
            'saleTime',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class KdsDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = KdsDetail
        fields = (
            'storeCd',
            'saleDt',
            'posNo',
            'billNo',
            'seq',
            'itemName',
            'qty',
            'itemSellGroup',
            'itemSellLevel',
            'itemSellType',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )
