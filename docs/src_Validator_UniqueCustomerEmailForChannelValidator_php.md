# UniqueCustomerEmailForChannelValidator.php

**Path**: `src\Validator\UniqueCustomerEmailForChannelValidator.php`

## Summary
This validator ensures that customer email addresses are unique within a specific sales channel in a Sylius e-commerce application. It canonicalizes the provided email, retrieves the corresponding channel, and checks if another customer with the same email already exists in that channel, adding a validation violation if a duplicate is found (excluding the customer being validated itself).

## Classes
- `UniqueCustomerEmailForChannelValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`

