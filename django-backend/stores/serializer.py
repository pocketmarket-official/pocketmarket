from rest_framework import serializers
from stores.models import Store
from stores.models import Funset
from stores.models import Pos
from stores.models import StoreDic
from users.models import User
from users.serializer import UserSerializer
#
#
# class LikeUserSerializer(serializers.RelatedField):
#     def to_representation(self, value):
#         return value.id
#
#     class Meta:
#         model = User
#

class StoreSerializer(serializers.ModelSerializer):
    likeUser = UserSerializer(read_only=False, many=True)
    # likeUser = LikeUserSerializer(read_only=True, many=True)

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

    def update(self, instance, validated_data):
        store=instance
        tmpUser = User.objects.get(id=2)
        tmpUserList = []
        tmpUserList.append(tmpUser)
        store.likeUser.set(tmpUserList)
        store.save()

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

class StoreDicSerializer(serializers.ModelSerializer):

    class Meta:
        model = StoreDic
        fields = (
            'id',
            'user',
            'dicType',
            'store',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )
