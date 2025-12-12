# UpdateShippingPickupPointValidator.php

**Path**: `src\Validator\UpdateShippingPickupPointValidator.php`

## Summary
This validator ensures business rule compliance when updating shipping information, specifically that a pickup point cannot be assigned without also specifying a shipping method. It validates `UpdateShipping` command objects by checking that if a pickup point is provided, a corresponding shipping method must also be present, otherwise it raises a constraint violation to prevent an invalid shipping configuration.

## Classes
- `UpdateShippingPickupPointValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`

