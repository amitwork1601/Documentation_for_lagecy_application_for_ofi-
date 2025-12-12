# AddingEligibleProductVariantToSubscriptionOrderValidator.php

**Path**: `src\Validator\SubscriptionOrder\AddingEligibleProductVariantToSubscriptionOrderValidator.php`

## Summary
This validator ensures that only eligible product variants can be added to a subscription order. It verifies the subscription order exists by token, then delegates to the parent `AbstractProductVariantValidator` to check if the specific product variant is allowed to be added to that subscription order, enforcing business rules around subscription product eligibility.

## Classes
- `AddingEligibleProductVariantToSubscriptionOrderValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`

