# RemoveFreeProductChecker.php

**Path**: `src\Service\Promotions\RemoveFreeProductChecker.php`

## Summary
The `RemoveFreeProductChecker` service handles the removal of free products from orders when promotion eligibility conditions are no longer met. It checks each promotion applied to an order, reverts ineligible promotions, and specifically removes order items that were added through "add_product_discount" promotion actions by either reducing their quantity or completely removing them from the order. This ensures that promotional free products are automatically cleaned up when customers modify their cart in ways that make them ineligible for those promotions.

## Classes
- `RemoveFreeProductChecker`

## Function Details

### `removeFreeProduct`

- **Parameters**: `$order, $promotions, $process = true`

### `removeFreeProductFromCoupon`

- **Parameters**: `$order, $promotionCoupon`

