# OrderRefundCompletionValidator.php

**Path**: `src\Validator\Constraints\OrderRefundCompletionValidator.php`

## Summary
This validator ensures that an order refund operation can be completed by checking if the order's payment is in a valid state for refunding. It retrieves an order by its token value and validates that the payment exists and can transition to a refunded state using the state machine, adding validation violations if the refund transition is not possible from the current payment state.

## Classes
- `OrderRefundCompletionValidator`

## Function Details

### `validate`

- **Parameters**: `mixed $value, Constraint $constraint`

