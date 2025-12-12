# PromotionCouponCodeAware.php

**Path**: `src\Api\Attribute\PromotionCouponCodeAware.php`

## Summary
This is a PHP attribute class used to mark API resources or DTOs that accept a promotion coupon code parameter. It allows developers to specify which constructor argument name should be used for the coupon code (defaulting to 'couponCode'), enabling automatic handling of promotional codes in API operations through metadata-driven configuration.

## Classes
- `PromotionCouponCodeAware`

## Function Details

### `__construct`

- **Parameters**: `public string $constructorArgumentName = self::DEFAULT_ARGUMENT_NAME`

