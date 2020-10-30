from rest_framework import serializers
from brands.models import Brand


class BrandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Brand
        fields = (
            'id',
            'brandCd',
            'brandName',
            'useYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )
