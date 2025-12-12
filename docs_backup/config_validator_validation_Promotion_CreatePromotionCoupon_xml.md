# CreatePromotionCoupon.xml

**Path**: `config\validator\validation\Promotion\CreatePromotionCoupon.xml`

## Summary
This XML configuration file defines validation rules for creating promotion coupons in a Sylius e-commerce application. It specifies constraints for the `CreatePromotionCoupon` command, ensuring the coupon code is not blank, has a length between 2-255 characters, and matches a specific regex pattern (alphanumeric characters, underscores, and hyphens only). The validation rules are grouped under "sylius" and include custom error messages for each constraint violation.

