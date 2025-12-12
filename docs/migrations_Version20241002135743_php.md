# Version20241002135743.php

**Path**: `migrations\Version20241002135743.php`

## Summary
This is a Doctrine database migration that adds translation support to the animal breed entity in a Sylius-based application. It creates a `sylius_animal_breed_translation` table with locale-specific breed names, migrates existing breed name data from the main table to the translation table for all configured locales, and then removes the original `name` column from the `sylius_animal_breed` table to complete the transition to a translatable field structure.

## Classes
- `Version20241002135743`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

### `getSchemaManager`


### `isTableExist`

- **Parameters**: `string $tableName`
- **Description**: @throws Exception
/

### `isColumnExist`

- **Parameters**: `string $tableName, string $columnName`
- **Description**: @throws Exception
/

