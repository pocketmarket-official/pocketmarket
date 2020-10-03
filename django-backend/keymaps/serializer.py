from rest_framework import serializers
from keymaps.models import StoreKeymap
from keymaps.models import TouchGroup
from keymaps.models import Keymap


class StoreKeymapSerializer(serializers.ModelSerializer):

    class Meta:
        model = StoreKeymap
        fields = (
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
            'storeCd',
            'keymapCd',
            'groupCd',
            'groupName',
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
            'storeCd',
            'keymapCd',
            'touchGroupCd',
            'posPage',
            'posIndex',
            'itemCd',
            'soldOutYn',
            'cprtGroupCd',
            'dispYn',
            'expectCnt',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )
