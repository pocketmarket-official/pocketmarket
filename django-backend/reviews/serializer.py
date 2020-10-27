from rest_framework import serializers
from reviews.models import Review
from reviews.models import ReviewImage
from reviews.models import Reply


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

#todo : 얘도 이상해. 뭐냐고..
class ReplySerializer(serializers.ModelSerializer):

    class Meta:
        model = Reply
        fields = {
            'storeCd',
            'saleDt',
            'billNo',
            'seq',
            'user',
            'context',
            'deleteYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        }