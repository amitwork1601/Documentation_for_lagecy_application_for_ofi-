# PromotionCouponCustomer.php

**Path**: `src\Entity\Promotion\PromotionCouponCustomer.php`

## Summary
This entity represents the relationship between promotion coupons and customers who have used them, tracking coupon usage history in an e-commerce system. It links a specific coupon to a customer and order, storing the amount/value applied and timestamps of when the coupon was used. This enables tracking of coupon redemptions, usage limits per customer, and provides an audit trail for promotional discount applications.

## Classes
- `PromotionCouponCustomer`

## Function Details

### `getId`


### `getPromotionCoupon`


### `setPromotionCoupon`

- **Parameters**: `?PromotionCoupon $promotionCoupon`

### `getCustomer`


### `setCustomer`

- **Parameters**: `?Customer $customer`

### `getOrder`


### `setOrder`

- **Parameters**: `?Order $order`

### `getAmount`


### `setAmount`

- **Parameters**: `?int $amount`

