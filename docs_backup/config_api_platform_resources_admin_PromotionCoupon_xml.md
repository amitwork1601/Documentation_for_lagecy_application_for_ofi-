# PromotionCoupon.xml

**Path**: `config\api_platform\resources\admin\PromotionCoupon.xml`

## Summary
This API Platform configuration file defines REST API operations for managing promotion coupons in the Sylius admin interface. It configures three endpoints: GET collection (list all coupons), GET single item (retrieve one coupon), and DELETE (remove a coupon), all using the `sylius:admin:promotion_coupon:show` serialization group for data normalization. The delete operation uses a custom processor (`RemoveProcessor`) to handle coupon removal logic with specific validation rules.

