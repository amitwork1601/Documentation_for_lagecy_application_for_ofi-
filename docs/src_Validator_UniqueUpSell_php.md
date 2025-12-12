# UniqueUpSell.php

**Path**: `src\Validator\UniqueUpSell.php`

## Summary
This is a custom Symfony validation constraint that enforces uniqueness for upselling entries. It defines a class-level constraint (as opposed to property-level) that will trigger the error message 'app.upselling.already_exists' when an upsell configuration already exists, preventing duplicate upselling rules in the system.

## Classes
- `UniqueUpSell`

## Function Details

### `getTargets`


