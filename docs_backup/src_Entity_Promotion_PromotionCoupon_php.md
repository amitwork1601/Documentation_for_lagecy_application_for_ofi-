# PromotionCoupon.php

**Path**: `src\Entity\Promotion\PromotionCoupon.php`

## Summary
The `PromotionCoupon` entity extends Sylius's base promotion coupon functionality to manage discount coupons with customer tracking capabilities. It establishes a one-to-many relationship with `PromotionCouponCustomer` to track which customers have used specific coupons, and exposes GraphQL API endpoints with filtering capabilities for searching coupons by promotion code and availability. The entity is auditable and includes custom filters for determining coupon availability and generic coupon queries.

## Classes
- `PromotionCoupon`

## Function Details

### `__construct`


### `getPromotionCouponCustomers`

- **Description**: @return Collection|PromotionCouponCustomer[]
/

### `addPromotionCouponCustomer`

- **Parameters**: `PromotionCouponCustomer $promotionCouponCustomer`

### `removePromotionCouponCustomer`

- **Parameters**: `PromotionCouponCustomer $promotionCouponCustomer`

### `getExpiresAt`


