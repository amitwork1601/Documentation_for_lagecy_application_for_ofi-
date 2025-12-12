# OrderRefundCompletion.php

**Path**: `src\Validator\Constraints\OrderRefundCompletion.php`

## Summary
This is a Symfony validation constraint class that ensures an order can only be refunded when its payment state is valid. It's a class-level constraint (applies to entire objects rather than individual properties) that validates business rules around order refund operations, preventing refunds when the order's payment state is incompatible with refund processing.

## Classes
- `OrderRefundCompletion`

## Function Details

### `getTargets`


