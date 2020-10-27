from rest_framework import serializers
from reviews.models import Review
from reviews.models import ReviewImage


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

#todo : 얘도 안됨. 뭐지..
class ReviewImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReviewImage
        fields = {
            'review',
            'seq',
            'url',
            'deleteYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        }