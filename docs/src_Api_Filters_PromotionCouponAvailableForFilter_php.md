# PromotionCouponAvailableForFilter.php

**Path**: `src\Api\Filters\PromotionCouponAvailableForFilter.php`

## Summary
This API Platform filter validates whether a promotion coupon is currently available for use by checking multiple availability criteria. It filters PromotionCoupon entities by verifying that usage limits haven't been exceeded, the promotion and coupon are within their valid date ranges (startsAt/endsAt/expiresAt), and optionally filters by customer eligibility when a value is provided. The filter is designed to ensure only active, non-expired coupons with remaining usage capacity are returned through the API.

## Classes
- `PromotionCouponAvailableForFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass`

### `getDescription`

- **Parameters**: `string $resourceClass`

