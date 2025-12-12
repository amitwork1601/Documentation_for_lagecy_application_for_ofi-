# BillingAddressValidator.php

**Path**: `src\Validator\BillingAddressValidator.php`

## Summary
The `BillingAddressValidator` is a Symfony custom constraint validator that ensures Order and Subscription entities do not use a PickupAddress as their billing address. It validates business logic by checking if the billing address is an instance of PickupAddress and adds a validation violation if true, enforcing that billing addresses must be regular addresses rather than pickup locations.

## Classes
- `BillingAddressValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`
- **Description**: @param Order|Subscription $value
/

