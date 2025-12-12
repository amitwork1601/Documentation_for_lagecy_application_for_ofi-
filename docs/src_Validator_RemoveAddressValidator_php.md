# RemoveAddressValidator.php

**Path**: `src\Validator\RemoveAddressValidator.php`

## Summary
This validator ensures that customer addresses can only be removed under specific business rules. It prevents deletion of an address if it's the customer's default address or if it's their last remaining address (must have at least one), and also validates that admin users cannot remove addresses from non-customer entities.

## Classes
- `RemoveAddressValidator`

## Function Details

### `__construct`

- **Parameters**: `private readonly UserContextInterface $userContext`

### `validate`

- **Parameters**: `$value, Constraint $constraint`

