# Version20250523122052.php

**Path**: `migrations\Version20250523122052.php`

## Summary
This Doctrine database migration adds a `weight_limit` column to the `sylius_pickup_point_shipping_method` table, enabling the system to store weight restrictions for pickup point shipping methods. The migration supports both upgrading (adding the nullable DOUBLE PRECISION column) and rollback (removing the column) operations for managing shipping weight constraints in a Sylius e-commerce application.

## Classes
- `Version20250523122052`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

