from django.db import models
from datetime import datetime

# Create your models here.
class SaleHeader(models.Model):
    storeCd = models.CharField(max_length=10, default='00000')
    saleDt = models.CharField(max_length=8, default='00000000')
    posNo = models.CharField(max_length=5, default='91')
    billNo = models.CharField(max_length=10, default='0000')
    saleFlag = models.CharField(max_length=3, default='000') #baseCode:050 [0:전체/1:정상/2:취소]
    totQty = models.IntegerField(default=0)
    totSaleAmt = models.FloatField(default=0.0) #할인이 적용되기 전 매출액
    saleAmt = models.FloatField(default=0.0) #할인이 적용된 실제 결제금액
    supAmt = models.FloatField(default=0.0) #실매출-부가세(실매출액)
    taxAmt = models.FloatField(default=0.0)
    offTaxAmt = models.FloatField(default=0.0)
    totDcAmt = models.FloatField(default=0.0)
    pointDcAmt = models.FloatField(default=0.0)
    pointDcCnt = models.IntegerField(default=0)
    cardAmt = models.FloatField(default=0.0)
    kkmAmt = models.FloatField(default=0.0)
    returnYn = models.CharField(max_length=1, default='N')
    orgStoreCd = models.CharField(max_length=10, null=True)
    orgSaleDt = models.CharField(max_length=8, null=True)
    orgPosNo = models.CharField(max_length=5, null=True)
    orgBillNo = models.CharField(max_length=10, null=True)
    sendYn = models.CharField(max_length=1, default='N')
    orderStatus = models.CharField(max_length=1, default=1)#1:주문중/2:주문완료/3:제조완료/4:픽업완료/5:리뷰작성완료
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, default=1)


class SaleDetail(models.Model):
    storeCd = models.CharField(max_length=10, default='00000')
    saleDt = models.CharField(max_length=8, default='00000000')
    posNo = models.CharField(max_length=5, default='91')
    billNo = models.CharField(max_length=10, default='0000')
    seq = models.IntegerField(default=1)
    saleFlag = models.CharField(max_length=3, default='000') #baseCode:050 [0:전체/1:정상/2:취소]
    orderType = models.CharField(max_length=3, default='000') #baseCode:062 [1:단품/2:세트]
    itemCd = models.CharField(max_length=20, default='00000')
    itemName = models.CharField(max_length=200, default='')
    qty = models.IntegerField(default=1)
    itemSellGroup = models.CharField(max_length=3, default='000')
    itemSellLevel = models.CharField(max_length=3, default='000') #[1:Parent/2:Child]
    itemSellType = models.CharField(max_length=3, default='000') #[1:일반/2:옵션변경/3:옵션추가/4:1+1/5:사은품]
    saleCost = models.FloatField(default=0.0)
    salePrice = models.FloatField(default=0.0)
    orgSalePrice = models.FloatField(default=0.0)
    totSaleAmt = models.FloatField(default=0.0)
    saleAmt = models.FloatField(default=0.0)
    supAmt = models.FloatField(default=0.0)
    taxAmt = models.FloatField(default=0.0)
    offTaxAmt = models.FloatField(default=0.0)
    taxYn = models.CharField(max_length=1, default='Y')
    totDcAmt = models.FloatField(default=0.0)
    pointDcAmt = models.FloatField(default=0.0)
    saleTime = models.CharField(max_length=6)
    sendYn = models.CharField(max_length=1, default='N')
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30, default='defaultValue', null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30, default='defaultValue', null=True)
#
# class CashLog(models.Model):
#     storeCd = models.CharField(max_length=10, default='00000')
#     saleDt = models.CharField(max_length=8, default='00000000')
#     posNo = models.CharField(max_length=5, default='91')
#     billNo = models.CharField(max_length=10, default='0000')
#     seq = models.IntegerField(default=1)
#     saleFlag = models.CharField(max_length=3, default='000')  # baseCode:050 [0:전체/1:정상/2:취소]
#     cashAmt = models.FloatField(default=0.0)
#     returnYn = models.CharField(max_length=1, default='N')
#     orgStoreCd = models.CharField(max_length=10, null=True)
#     orgSaleDt = models.CharField(max_length=8, null=True)
#     orgPosNo = models.CharField(max_length=5, null=True)
#     orgBillNo = models.CharField(max_length=10, null=True)
#     orgSeq = models.IntegerField(default=1, null=True)
#     saleTime = models.CharField(max_length=6)
#     insDt = models.DateTimeField(default=datetime.now(), null=True)
#     insUs = models.CharField(max_length=30, default='defaultValue', null=True)
#     modDt = models.DateTimeField(default=datetime.now(), null=True)
#     modUs = models.CharField(max_length=30, default='defaultValue', null=True)

class CardLog(models.Model):
    storeCd = models.CharField(max_length=10, default='00000')
    saleDt = models.CharField(max_length=8, default='00000000')
    posNo = models.CharField(max_length=5, default='91')
    billNo = models.CharField(max_length=10, default='0000')
    seq = models.IntegerField(default=1)
    saleFlag = models.CharField(max_length=3, default='000')  # baseCode:050 [0:전체/1:정상/2:취소]
    cardAmt = models.FloatField(default=0.0)
    cardNo = models.CharField(max_length=20, default='0000000000000000')
    vanCd = models.CharField(max_length=3, default='000')
    cardCd = models.CharField(max_length=3, default='000')
    cardName = models.CharField(max_length=50, default='')
    apprNo = models.CharField(max_length=20, default='0000000000000000')
    apprDt = models.CharField(max_length=8, default='00000000')
    apprTime = models.CharField(max_length=6, default='000000')
    apprFlag = models.CharField(max_length=1, default=1) #[1:정상승인/2:임의등록]
    instFlag = models.CharField(max_length=1, default='0') #[0:할부없음/1:할부]
    instMonth = models.CharField(max_length=2, default='00')
    terminalId = models.CharField(max_length=20, default='')
    registerNo = models.CharField(max_length=20, default='')
    returnYn = models.CharField(max_length=1, default='N')
    orgStoreCd = models.CharField(max_length=10, default='00000')
    orgSaleDt = models.CharField(max_length=8, default='00000000')
    orgPosNo = models.CharField(max_length=5, default='91')
    orgBillNo = models.CharField(max_length=10, default='0000')
    orgSeq = models.IntegerField(null=True)
    orgApprNo = models.CharField(max_length=8, default='00000000')
    remark = models.CharField(max_length=255, default='')
    sendYn = models.CharField(max_length=1, default='N')
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30, default='defaultValue', null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30, default='defaultValue', null=True)
#
# class EtcLog(models.Model):
#     storeCd = models.CharField(max_length=10, default='00000')
#     saleDt = models.CharField(max_length=8, default='00000000')
#     posNo = models.CharField(max_length=5, default='91')
#     billNo = models.CharField(max_length=10, default='00000')
#     seq = models.IntegerField(default=1)
#     saleFlag = models.CharField(max_length=3, default='000')  # baseCode:050 [0:전체/1:정상/2:취소]
#     etcAmt = models.FloatField(default=0.0)
#     etcPayCatCd = models.CharField(max_length=5, default='000')
#     etcPayCd = models.CharField(max_length=5, default='000')
#     remark = models.CharField(max_length=255, null=True)
#     insDt = models.DateTimeField(default=datetime.now(), null=True)
#     insUs = models.CharField(max_length=30, default='defaultValue', null=True)
#     modDt = models.DateTimeField(default=datetime.now(), null=True)
#     modUs = models.CharField(max_length=30, default='defaultValue', null=True)
#
# class StandardLog(models.Model):
#     storeCd = models.CharField(max_length=10, default='00000')
#     saleDt = models.CharField(max_length=8, default='00000000')
#     posNo = models.CharField(max_length=5, default='91')
#     billNo = models.CharField(max_length=10, default='00000')
#     seq = models.IntegerField(default=1)
#     cdmtSeq = models.IntegerField(default=1)
#     saleFlag = models.CharField(max_length=3, default='000')  # baseCode:050 [0:전체/1:정상/2:취소]
#     cdmtCd = models.CharField(max_length=20, default='000')
#     useUnit = models.CharField(max_length=5, default='000')
#     cdmtQty = models.FloatField(default=0.0)
#     cost = models.FloatField(default=0.0)
#     standardQty = models.FloatField(default=0.0)
#     itemCd = models.CharField(max_length=20, default='00000')
#     qty = models.IntegerField(default=0)
#     insDt = models.DateTimeField(default=datetime.now(), null=True)
#     insUs = models.CharField(max_length=30, default='defaultValue', null=True)
#     modDt = models.DateTimeField(default=datetime.now(), null=True)
#     modUs = models.CharField(max_length=30, default='defaultValue', null=True)

class PurchaseLog(models.Model):
    storeCd = models.CharField(max_length=10, default='00000')
    purchaseDt = models.CharField(max_length=8, default='00000000')
    registerNo = models.CharField(max_length=20, default='00000')
    seq = models.IntegerField(default=1)
    purchaseFlag = models.CharField(max_length=3, default='000')
    cdmtCd = models.CharField(max_length=20, default='000')
    orderUnit = models.CharField(max_length=5, default='000')
    purchaseQty = models.IntegerField(default=0)
    approvalFlag = models.CharField(max_length=3, default='000')
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30, default='defaultValue', null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30, default='defaultValue', null=True)

class SoldoutLog(models.Model):
    storeCd = models.CharField(max_length=10, default='00000')
    saleDt = models.CharField(max_length=8, default='00000000')
    itemCd = models.CharField(max_length=20, default='00000')
    soldoutYn = models.CharField(max_length=1, default='Y')
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30, default='defaultValue', null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30, default='defaultValue', null=True)

class CornerStateLog(models.Model):
    storeCd = models.CharField(max_length=10, default='00000')
    saleDt = models.CharField(max_length=8, default='00000000')
    keymapCd = models.CharField(max_length=10, default='000')
    groupCd = models.CharField(max_length=3, default='000')
    stateFlag = models.CharField(max_length=1, default='1') #[1:원활/2:혼잡/3:주문불가]
    insDt = models.DateTimeField(default=datetime.now(), null=True)
    insUs = models.CharField(max_length=30, default='defaultValue', null=True)
    modDt = models.DateTimeField(default=datetime.now(), null=True)
    modUs = models.CharField(max_length=30, default='defaultValue', null=True)

