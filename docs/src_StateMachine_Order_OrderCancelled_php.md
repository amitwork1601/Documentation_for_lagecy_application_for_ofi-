# OrderCancelled.php

**Path**: `src\StateMachine\Order\OrderCancelled.php`

## Summary
This class is a state machine callback that handles cleanup when an order is cancelled in an e-commerce system. Its main functionality is to remove and delete all promotion coupon associations from the cancelled order, ensuring that customer-specific coupon usage records are properly cleaned up when an order doesn't complete.

## Classes
- `OrderCancelled`

## Function Details

### `apply`

- **Parameters**: `OrderInterface $order`

### `removePromotionCouponApplied`

- **Parameters**: `OrderInterface $order`

