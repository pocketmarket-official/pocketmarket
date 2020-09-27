from rest_framework import serializers
from reviewLikes.models import ReviewLike


class ReviewLikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReviewLike
        fields = (
            'reviewLikeName',
        )
