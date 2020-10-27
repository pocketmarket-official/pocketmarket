from rest_framework import serializers
from reviews.models import Review


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = (
            'storeCd',
            'saleDt',
            'billNo',
            'user',
            'context',
            'likeUser',
            'deleteYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )
