# ProductAvailableGuardComplete.php

**Path**: `src\StateMachine\Order\ProductAvailableGuardComplete.php`

## Summary
This class is a state machine guard that validates whether an order can transition to the "complete" state in the checkout process. It checks product availability for offline/manual payment methods (like cash on delivery or bank transfer), but bypasses the availability check for online payment methods since payment completion implies order confirmation. The guard ensures that orders using offline payment methods have sufficient inventory before completion, while allowing orders with online payments to proceed directly since payment authorization indicates commitment.

## Classes
- `ProductAvailableGuardComplete`

## Function Details

### `check`

- **Parameters**: `Order $order, string $transition`

