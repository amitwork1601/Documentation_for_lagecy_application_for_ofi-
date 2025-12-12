# OrderPromotionsUsageModifier.php

**Path**: `src\Promotion\Modifier\OrderPromotionsUsageModifier.php`

## Summary
This class manages the usage tracking of promotions and promotion coupons applied to orders in an e-commerce system. It implements increment and decrement operations to track how many times promotions and coupons have been used, with special handling for cancelled orders where usage counts are only decremented if the promotion/coupon is configured to be reusable after cancellation.

## Classes
- `OrderPromotionsUsageModifier`

## Function Details

### `increment`

- **Parameters**: `OrderInterface $order`

### `decrement`

- **Parameters**: `OrderInterface $order`

