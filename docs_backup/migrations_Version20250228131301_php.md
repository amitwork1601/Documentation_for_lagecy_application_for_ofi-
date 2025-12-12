# Version20250228131301.php

**Path**: `migrations\Version20250228131301.php`

## Summary
This is a Doctrine database migration that adds an `active` boolean column to the `sylius_order_talon_one_coupon` table. The migration enables tracking of whether Talon.One promotional coupons associated with Sylius orders are currently active or inactive, with the ability to rollback by removing the column in the `down()` method.

## Classes
- `Version20250228131301`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

