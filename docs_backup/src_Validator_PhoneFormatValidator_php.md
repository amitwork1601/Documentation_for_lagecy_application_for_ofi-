# PhoneFormatValidator.php

**Path**: `src\Validator\PhoneFormatValidator.php`

## Summary
The `PhoneFormatValidator` class is a Symfony custom constraint validator that validates phone number formats using the libphonenumber library. It checks if phone numbers are valid and properly formatted, supporting both international format (with '+' prefix) and domestic formats by inferring the region code from the Customer's channel or Address country code (defaulting to 'FR' for France). The validator reports appropriate violation messages based on whether the number is merely invalid or completely unparseable, adding violations to the 'phoneNumber' path when validation fails.

## Classes
- `PhoneFormatValidator`

## Function Details

### `__construct`


### `validate`

- **Parameters**: `$value, Constraint $constraint`

### `getPhoneNumber`

- **Parameters**: `string $value`

