# ApplyCouponToCart.xml

**Path**: `config\serialization\Commands\Cart\ApplyCouponToCart.xml`

## Summary
This XML configuration file defines serialization groups for the `ApplyCouponToCart` command class in a Symfony-based e-commerce application. It specifies that the `couponCode` attribute should be serialized/deserialized when using either the `shop:cart:apply_coupon` or `admin:cart:apply_coupon` serialization groups, enabling controlled data exposure for applying discount coupons to shopping carts in both shop-facing and admin contexts.

