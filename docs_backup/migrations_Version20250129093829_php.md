# Version20250129093829.php

**Path**: `migrations\Version20250129093829.php`

## Summary
This Doctrine database migration creates a translation table for Sylius shipping method categories, enabling multi-language support for category names. The migration adds the `sylius_shipping_method_category_translation` table with fields for translatable content (name), locale identifiers, and a foreign key relationship to the parent `sylius_shipping_method_category` table, with a unique constraint ensuring one translation per locale per category.

## Classes
- `Version20250129093829`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

