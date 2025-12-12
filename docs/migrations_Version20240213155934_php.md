# Version20240213155934.php

**Path**: `migrations\Version20240213155934.php`

## Summary
This database migration removes the `sylius_fixtures_loaded` tracking table and adds unique constraints on the `code` columns for two Sylius animal-related tables (`sylius_animal_condition` and `sylius_animal_kibble_brand_range`). It also removes temporal validity columns (`valid_from` and `valid_until`) from the `sylius_shipping_range_price_item` table, simplifying the shipping price range data model by eliminating time-based price validity tracking.

## Classes
- `Version20240213155934`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

