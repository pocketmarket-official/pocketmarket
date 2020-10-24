from rest_framework import serializers
from kdses.models import Master
from kdses.models import SetMaster


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
