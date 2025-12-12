# RemovePromotionValidator.php

**Path**: `src\Validator\Promotion\RemovePromotionValidator.php`

## Summary
This validator ensures that a Promotion entity can be safely removed/deleted before the deletion operation is performed. It uses the `IsDeletablePromotionChecker` to verify business rules that determine whether a promotion is eligible for deletion (e.g., checking if it's currently active or has associated orders), and adds a validation violation if the promotion cannot be deleted.

## Classes
- `RemovePromotionValidator`

## Function Details

### `__construct`

- **Parameters**: `private IsDeletablePromotionChecker $checker`

### `validate`

- **Parameters**: `$value, Constraint $constraint`

