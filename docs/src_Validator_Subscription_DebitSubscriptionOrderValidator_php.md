# DebitSubscriptionOrderValidator.php

**Path**: `src\Validator\Subscription\DebitSubscriptionOrderValidator.php`

## Summary
This validator ensures that subscription orders are eligible for debit processing by verifying two conditions: that each subscription order exists in the system (via token lookup) and that it has at least one shipment associated with it. It's used in a subscription billing context to prevent charging customers for orders that don't exist or haven't been shipped yet, adding appropriate validation violations when these business rules are violated.

## Classes
- `DebitSubscriptionOrderValidator`

## Function Details

### `__construct`

- **Parameters**: `private SubscriptionOrderRepository $subscriptionOrderRepository`

### `validate`

- **Parameters**: `$value, Constraint $constraint`

