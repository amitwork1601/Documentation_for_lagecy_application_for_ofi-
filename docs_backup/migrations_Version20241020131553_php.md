# Version20241020131553.php

**Path**: `migrations\Version20241020131553.php`

## Summary
This is a Doctrine database migration for Sylius 2.0 that modifies foreign key constraints on the `sylius_product_variant_option_value` table by removing the cascade-on-delete behavior. The migration prevents automatic deletion of product variant option values when their parent variant or option value is deleted, giving the application more explicit control over data integrity and deletion behavior. The down() method reverses this change by restoring the CASCADE delete constraints.

## Classes
- `Version20241020131553`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

