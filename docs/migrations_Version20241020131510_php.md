# Version20241020131510.php

**Path**: `migrations\Version20241020131510.php`

## Summary
This is a Doctrine database migration for Sylius 2.0 that adds a `position` field to the `sylius_product_image` table to enable ordered sorting of product images. The migration automatically assigns sequential position values (starting from 0) to existing product images, grouped by their owner product, based on their current ID order to preserve existing image arrangements.

## Classes
- `Version20241020131510`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

