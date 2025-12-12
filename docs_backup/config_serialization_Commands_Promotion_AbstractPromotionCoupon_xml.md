# AbstractPromotionCoupon.xml

**Path**: `config\serialization\Commands\Promotion\AbstractPromotionCoupon.xml`

## Summary
This Symfony serializer configuration file defines the serialization groups for the `AbstractPromotionCoupon` command class in a Sylius e-commerce application. It specifies which coupon attributes (code, usage limits, reusability settings, expiration date) should be serialized/deserialized during admin API operations for creating and updating promotion coupons, with the `code` attribute only available during creation while other attributes are available for both create and update operations.

