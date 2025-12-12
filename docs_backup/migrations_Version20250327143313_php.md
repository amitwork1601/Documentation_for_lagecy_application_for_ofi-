# Version20250327143313.php

**Path**: `migrations\Version20250327143313.php`

## Summary
This is a Doctrine database migration that adds free shipping functionality to the Sylius e-commerce platform's shipment system. The migration adds a `free_shipping_threshold` column to the `sylius_shipment` table to store the minimum order value (as an integer) required to qualify for free shipping, with the ability to roll back this change if needed.

## Classes
- `Version20250327143313`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

