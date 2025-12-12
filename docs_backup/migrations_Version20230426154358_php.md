# Version20230426154358.php

**Path**: `migrations\Version20230426154358.php`

## Summary
This is a Doctrine database migration for Sylius e-commerce platform that modifies the foreign key constraint between products and their main taxon (category). The migration changes the `main_taxon_id` foreign key in the `sylius_product` table to automatically set the field to NULL when the referenced taxon is deleted, preventing orphaned references and allowing safe deletion of product categories without breaking product data integrity.

## Classes
- `Version20230426154358`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

