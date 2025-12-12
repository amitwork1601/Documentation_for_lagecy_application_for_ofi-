# PromotionCouponGenericFilter.php

**Path**: `src\Api\Filters\PromotionCouponGenericFilter.php`

## Summary
This class implements a custom API Platform filter for searching PromotionCoupon entities across multiple related fields. It enables a single "genericFilter" parameter to search simultaneously against the coupon's code, the associated promotion's code, and the linked customer's ID using a LIKE query with wildcard matching. This provides a unified search interface for the promotion coupon API endpoint, allowing users to find coupons by entering any of these related identifiers.

## Classes
- `PromotionCouponGenericFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass`

### `getDescription`

- **Parameters**: `string $resourceClass`

