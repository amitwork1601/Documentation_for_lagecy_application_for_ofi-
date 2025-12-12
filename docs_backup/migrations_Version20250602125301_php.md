# Version20250602125301.php

**Path**: `migrations\Version20250602125301.php`

## Summary
This Doctrine database migration modifies the foreign key constraint on the `sylius_customer_business_report` table to add CASCADE deletion behavior. When a customer is deleted from the `sylius_customer` table, this ensures that all associated business reports are automatically deleted as well, replacing the previous behavior that would have prevented customer deletion or left orphaned records.

## Classes
- `Version20250602125301`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

