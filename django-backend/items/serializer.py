from rest_framework import serializers
from items.models import Item
from items.models import Set
from items.models import SetOpt
from items.models import ItemAdd
from items.models import AddCat
from items.models import Add


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = (
            'brandCd',
            'itemCd',
            'itemName',
            'price',
            'takeOutPrice',
            'setYn',
            'itemFg',
            'useYn',
            'imgSmallUrl',
            'ordPrtYn',
            'ordPrtText',
            'kdsSendYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )

class SetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Set
        fields = (
            'setItemCd',
            'seq',
            'subItemCd',
            'subItemQty',
            'subItemPrice',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )

class SetOptSerializer(serializers.ModelSerializer):

    class Meta:
        model = SetOpt
        fields = (
            'storeCd',
            'subItemCd',
            'changeItemCd',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )

class ItemAddSerializer(serializers.ModelSerializer):

    class Meta:
        model = ItemAdd
        fields = (
            'itemCd',
            'itemAddCd',
            'itemSort',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )

class AddCatSerializer(serializers.ModelSerializer):

    class Meta:
        model = AddCat
        fields = (
            'addCatCd',
            'addCatName',
            'useYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )

class AddSerializer(serializers.ModelSerializer):

    class Meta:
        model = Add
        fields = (
            'addCatCd',
            'addItemCd',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )