from rest_framework import serializers
from trades.models import SaleHeader
from trades.models import SaleDetail
from trades.models import CashLog
from trades.models import CardLog
from trades.models import EtcLog
from trades.models import StandardLog
from trades.models import PurchaseLog
from trades.models import SoldoutLog
from trades.models import CornerStateLog


class SaleHeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleHeader
        fields = (
            'storeCd',
            'saleDt',
            'posNo',
            'billNo',
            'saleFlag',
            'mealCd',
            'mealName',
            'totalQty',
            'totalSaleAmt',
            'saleAmt',
            'supplyAmt',
            'taxAmt',
            'offTaxAmt',
            'totalDcAmt',
            'pointDcAmt',
            'pointDcAmt',
            'cashAmt',
            'cardAmt',
            'etcAmt'
        )


class SaleDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleDetail
        fields = (
            'storeCd',
            'saleDt',
            'posNo',
            'billNo',
            'seq',
            'saleFlag',
            'orderType',
            'mealCd',
            'mealName',
            'itemCd',
            'itemName',
            'qty',
            'itemSellGroup',
            'itemSellLevel',
            'itemSellType',
            'saleCost',
            'salePrice',
            'orgSalePrice',
            'totalSaleAmt',
            'saleAmt',
            'supplyAmt',
            'taxAmt',
            'offTaxAmt',
            'taxFlag',
            'totalDcAmt',
            'pointDcAmt',
            'saleTime',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class CashLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = CashLog
        fields = (
            'storeCd',
            'saleDt',
            'posNo',
            'billNo',
            'seq',
            'saleFlg',
            'cashAmt',
            'returnYn',
            'orgStoreCd',
            'orgSaleDate',
            'orgPosNo',
            'orgBillNo',
            'orgSeq',
            'saleTime',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class CardLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardLog
        fields = (
            'storeCd',
            'saleDt',
            'posNo',
            'billNo',
            'seq',
            'saleFlag',
            'cardAmt',
            'cardNo',
            'vanCd',
            'cardCd',
            'cardName',
            'buyCardCd',
            'buyCardName',
            'approvalNo',
            'approvalDate',
            'approvalTime',
            'approvalFlag',
            'signYn',
            'instFlag',
            'instMonth',
            'terminalId',
            'registerNo',
            'returnYn',
            'orgStoreCd',
            'orgSaleDate',
            'orgPosNo',
            'orgBillNo',
            'orgSeq',
            'orgApprovalNo',
            'remark',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class EtcLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = EtcLog
        fields = (
            'storeCd',
            'saleDt',
            'posNo',
            'billNo',
            'seq',
            'saleFlag',
            'etcAmt',
            'etcPayCatCd',
            'etcPayCd',
            'remark',
            'orgStoreCd',
            'orgSaleDate',
            'orgPosNo',
            'orgBillNo',
            'orgSeq',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class StandardLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = StandardLog
        fields = (
            'storeCd',
            'saleDt',
            'posNo',
            'billNo',
            'seq',
            'cdmtSeq',
            'saleFlag',
            'cdmtCd',
            'useUnit',
            'cdmtQty',
            'cost',
            'standardQty',
            'itemCd',
            'qty',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class PurchaseLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = PurchaseLog
        fields = (
            'storeCd',
            'purchaseDt',
            'registerNo',
            'seq',
            'purchaseFlag',
            'cdmtCd',
            'orderUnit',
            'purchaseQty',
            'approvalFlag',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class SoldoutLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = SoldoutLog
        fields = (
            'storeCd',
            'saleDt',
            'itemCd',
            'soldoutYn',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )


class CornerStateLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = CornerStateLog
        fields = (
            'storeCd',
            'saleDt',
            'keymapCd',
            'groupCd',
            'stateFlag',
            'insDt',
            'insUs',
            'modDt',
            'modUs'
        )
