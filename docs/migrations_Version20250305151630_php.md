# Version20250305151630.php

**Path**: `migrations\Version20250305151630.php`

## Summary
This Doctrine database migration adds an `autoDelete` boolean flag to the `sylius_order_talon_one_coupon` table, likely to track whether Talon.One promotional coupons associated with Sylius orders should be automatically deleted under certain conditions. The migration provides both upgrade and rollback functionality to add or remove this column from the coupon tracking table.

## Classes
- `Version20250305151630`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

