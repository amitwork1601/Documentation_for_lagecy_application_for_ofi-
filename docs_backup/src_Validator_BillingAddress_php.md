# BillingAddress.php

**Path**: `src\Validator\BillingAddress.php`

## Summary
This is a custom Symfony validation constraint that ensures a billing address is not set to a pickup point location. It defines a class-level constraint (as indicated by `CLASS_CONSTRAINT`) that will be used to validate entire entity instances, likely to enforce business rules around order or customer billing information where physical billing addresses and pickup points need to be distinguished.

## Classes
- `BillingAddress`

## Function Details

### `getTargets`


