# Version20250312141404.php

**Path**: `migrations\Version20250312141404.php`

## Summary
This is a Doctrine database migration that adds a nullable `talonSuffix` column (VARCHAR(30)) to the `sylius_promotion_analytic_category` table. The migration extends promotional analytics functionality in a Sylius e-commerce system by enabling categorization or identification of promotions with custom talon (coupon) suffixes, with a reversible down migration that removes this column if needed.

## Classes
- `Version20250312141404`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

