# Version20241009103632.php

**Path**: `migrations\Version20241009103632.php`

## Summary
This is a Doctrine database migration that adds shipment tracking integration functionality. It adds a boolean column `available_in_shipup` to the `sylius_shipment` table to track whether a shipment is available in the ShipUp tracking system. The migration includes both up (add column) and down (remove column) methods for reversibility.

## Classes
- `Version20241009103632`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

