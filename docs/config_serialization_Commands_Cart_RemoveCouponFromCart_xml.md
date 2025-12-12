# RemoveCouponFromCart.xml

**Path**: `config\serialization\Commands\Cart\RemoveCouponFromCart.xml`

## Summary
This Symfony serializer configuration file defines serialization rules for the `RemoveCouponFromCart` command in a shopping cart API. It specifies that the `couponCode` attribute should be included when serializing/deserializing this command within the `admin:cart:remove_coupon` context group, enabling administrators to remove promotional coupons from shopping carts through the API.

