# Version20240223121724.php

**Path**: `migrations\Version20240223121724.php`

## Summary
This Doctrine migration adds a new boolean field `enabled_for_shop_order` to the `sylius_payment_method` table, which controls whether a payment method is available for shop orders. The migration provides both upgrade and rollback functionality, with the field defaulting to enabled (1) when added to support backwards compatibility with existing payment methods.

## Classes
- `Version20240223121724`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

