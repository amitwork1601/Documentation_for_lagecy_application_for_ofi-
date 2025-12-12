# JunkEmailValidator.php

**Path**: `src\Validator\JunkEmailValidator.php`

## Summary
The `JunkEmailValidator` class is a Symfony custom constraint validator that checks whether an email address is disposable or from a junk/temporary email provider. It uses the `EmailChecker` library to validate email addresses against known disposable email domains, and adds a validation violation if the email is identified as junk, helping prevent registration with temporary or throwaway email addresses in the application.

## Classes
- `JunkEmailValidator`

## Function Details

### `__construct`


### `validate`

- **Parameters**: `$value, Constraint $constraint`

