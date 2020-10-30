from rest_framework import serializers
from keymaps.models import StoreKeymap
from keymaps.models import TouchGroup
from keymaps.models import Keymap


class StoreKeymapSerializer(serializers.ModelSerializer):

    class Meta:
        model = StoreKeymap
        fields = (
            'id',
            'storeCd',
            'keymapCd',
            'keymapName',
            'blankImgUrl',
            'useYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )

class TouchGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = TouchGroup
        fields = (
            'id',
            'storeCd',
            'keymapCd',
            'touchGroupCd',
            'touchGroupName',
            'imgUrl',
            'imgUseYn',
            'posPage',
            'posIndex',
            'useYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )

class KeymapSerializer(serializers.ModelSerializer):

    class Meta:
        model = Keymap
        fields = (
            'id',
            'storeCd',
            'keymapCd',
            'touchGroupCd',
            'posPage',
            'posIndex',
            'itemCd',
            'soldoutYn',
            'cprtGroupCd',
            'dispYn',
            'expectCnt',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )
