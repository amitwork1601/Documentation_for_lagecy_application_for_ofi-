# PromotionCoupon.xml

**Path**: `config\validator\validation\Promotion\PromotionCoupon.xml`

## Summary
This XML configuration file defines validation constraints for the `PromotionCoupon` entity in a Symfony application. It specifically applies a custom validator (`RemovePromotionCoupon`) to ensure business rules are enforced when deleting promotion coupons, with the validation active only when the `app_coupon_delete` validation group is used.

