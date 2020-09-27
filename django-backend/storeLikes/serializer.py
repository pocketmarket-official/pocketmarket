from rest_framework import serializers
from storeLikes.models import StoreLike


class StoreLikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = StoreLike
        fields = (
            'storeLikeName',
        )
