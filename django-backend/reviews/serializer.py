from rest_framework import serializers
from reviews.models import Review
from reviews.models import ReviewLike
from reviews.models import ReviewImage
from reviews.models import Reply



class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = (
            'id',
            'storeCd',
            'saleDt',
            'billNo',
            'user',
            'context',
            'deleteYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        )

class ReviewLikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReviewLike
        fields = (
            'review',
            'user',
            'likeYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )

class ReviewImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReviewImage
        fields = {
            'id',
            'review',
            'seq',
            'url',
            'deleteYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs',
        }

class ReplySerializer(serializers.ModelSerializer):

    class Meta:
        model = Reply
        fields = {
            'id',
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