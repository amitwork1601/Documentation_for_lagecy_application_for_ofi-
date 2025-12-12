# Version20230921154314.php

**Path**: `migrations\Version20230921154314.php`

## Summary
This is a Doctrine database migration that adds an `old_product` boolean flag to the `sylius_product` table in a Sylius e-commerce application. The migration allows the system to mark or track products as "old" (likely for inventory management, product lifecycle tracking, or filtering purposes), with the field defaulting to `false` (0) for existing and new products.

## Classes
- `Version20230921154314`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

