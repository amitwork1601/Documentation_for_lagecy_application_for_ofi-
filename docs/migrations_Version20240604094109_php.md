# Version20240604094109.php

**Path**: `migrations\Version20240604094109.php`

## Summary
This is a Doctrine database migration that removes the `code_logistic` column from the `sylius_product` table. The migration supports both forward (removing the logistics reference field) and backward (restoring it as a nullable VARCHAR) operations, indicating a simplification of the Product entity by eliminating logistic code tracking.

## Classes
- `Version20240604094109`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

