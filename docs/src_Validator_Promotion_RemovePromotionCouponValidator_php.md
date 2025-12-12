# RemovePromotionCouponValidator.php

**Path**: `src\Validator\Promotion\RemovePromotionCouponValidator.php`

## Summary
This validator ensures that a promotion coupon can only be removed if it is not currently being used by any orders. It checks the order repository to count how many orders reference the coupon, and if any exist, it adds a validation violation to prevent the coupon's deletion, thereby maintaining referential integrity in the promotion system.

## Classes
- `RemovePromotionCouponValidator`

## Function Details

### `__construct`

- **Parameters**: `private OrderRepository $orderRepository`

### `validate`

- **Parameters**: `$value, Constraint $constraint`

