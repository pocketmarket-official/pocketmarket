from rest_framework import serializers
from keymaps.models import Keymap


class KeymapSerializer(serializers.ModelSerializer):

    class Meta:
        model = Keymap
        fields = (
            'keymapName',
        )
