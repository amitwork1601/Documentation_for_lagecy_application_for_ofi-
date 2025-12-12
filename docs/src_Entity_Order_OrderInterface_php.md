# OrderInterface.php

**Path**: `src\Entity\Order\OrderInterface.php`

## Summary
This interface extends Sylius's base OrderInterface to add custom e-commerce order functionality, including marketing/analytics tracking capabilities (Google Click ID, session tracking, ad/analytics storage consent) and integration with TalonOne promotional coupon system. It defines methods for managing tracking parameters, user agent information, and a collection of TalonOne coupons with lookup capabilities by coupon code or effect identifier.

## Function Details

### `getCouponForPromotion`

- **Parameters**: `PromotionInterface $promotion`

### `getGclid`


### `setGclid`

- **Parameters**: `?string $gclid`

### `getGSessionId`


### `setGSessionId`

- **Parameters**: `?string $gSessionId`

### `getCustomerUserAgent`


### `setCustomerUserAgent`

- **Parameters**: `?string $customerUserAgent`

### `getAdStorage`


### `setAdStorage`

- **Parameters**: `bool $adStorage`

### `getAnalyticsStorage`


### `setAnalyticsStorage`

- **Parameters**: `bool $analyticsStorage`

### `getTalonOneCoupons`


### `addTalonOneCoupon`

- **Parameters**: `OrderTalonOneCoupon $talonOneCoupon`

### `removeTalonOneCoupon`

- **Parameters**: `OrderTalonOneCoupon $talonOneCoupon`

### `hasTalonOneCoupon`

- **Parameters**: `OrderTalonOneCoupon $talonOneCoupon`

### `getTalonOneCouponByCouponCode`

- **Parameters**: `string $couponCode`

### `getTalonOneCouponByEffectIdentifier`

- **Parameters**: `int $triggeredByCouponIdentifier`

