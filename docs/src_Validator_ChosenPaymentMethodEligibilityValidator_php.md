# ChosenPaymentMethodEligibilityValidator.php

**Path**: `src\Validator\ChosenPaymentMethodEligibilityValidator.php`

## Summary
This validator ensures that a chosen payment method is eligible and available for a specific payment during the checkout process. It verifies that the payment method exists and is among the supported methods for the given payment by checking against the payment method resolver, adding constraint violations if the method doesn't exist or isn't available for that particular payment context.

## Classes
- `ChosenPaymentMethodEligibilityValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`

