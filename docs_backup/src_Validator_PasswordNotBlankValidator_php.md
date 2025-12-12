# PasswordNotBlankValidator.php

**Path**: `src\Validator\PasswordNotBlankValidator.php`

## Summary
This validator enforces that password fields are not blank, with special exemptions for admin users who are allowed to submit blank passwords (likely for profile updates where password changes are optional). It extends Symfony's constraint validator system and uses the user context to check if the current user is an AdminUser, skipping validation if so, otherwise applying standard not-blank validation rules similar to Symfony's NotBlank constraint.

## Classes
- `PasswordNotBlankValidator`

## Function Details

### `__construct`

- **Parameters**: `private UserContextInterface $userContext`

### `validate`

- **Parameters**: `mixed $value, Constraint $constraint`

