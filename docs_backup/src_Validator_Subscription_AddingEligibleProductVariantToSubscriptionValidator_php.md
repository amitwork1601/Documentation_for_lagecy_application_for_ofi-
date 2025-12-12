# AddingEligibleProductVariantToSubscriptionValidator.php

**Path**: `src\Validator\Subscription\AddingEligibleProductVariantToSubscriptionValidator.php`

## Summary
This validator ensures that a product variant being added to a subscription is eligible for that subscription. It verifies the subscription exists and is active, confirms a draft order is present, and then delegates to parent class logic to validate the specific product variant against the subscription's draft order requirements.

## Classes
- `AddingEligibleProductVariantToSubscriptionValidator`

## Function Details

### `validate`

- **Parameters**: `mixed $value, Constraint $constraint`

