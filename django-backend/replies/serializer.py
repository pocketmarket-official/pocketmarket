from rest_framework import serializers
from replies.models import Reply


class ReplySerializer(serializers.ModelSerializer):

    class Meta:
        model = Reply
        fields = (
            'ReplyName',
        )
