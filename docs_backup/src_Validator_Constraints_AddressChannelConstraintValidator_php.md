# AddressChannelConstraintValidator.php

**Path**: `src\Validator\Constraints\AddressChannelConstraintValidator.php`

## Summary
This validator ensures that an address's country code is allowed for the specific sales channel of an order during checkout. It retrieves the order by token, checks if the address's country is in the channel's list of allowed countries, and adds a validation error if the country is not permitted for that channel. This enforces channel-specific geographical restrictions on where orders can be shipped.

## Classes
- `AddressChannelConstraintValidator`

## Function Details

### `validate`

- **Parameters**: `mixed $value, Constraint $constraint`

