# Version20241003135910.php

**Path**: `migrations\Version20241003135910.php`

## Summary
This is a Doctrine database migration that adds a `locale_code` column to the `sylius_customer` table to store customer locale preferences. The migration populates existing customer records with locale codes by joining with their associated channel's default locale, ensuring customers have appropriate localization settings without requiring manual data entry.

## Classes
- `Version20241003135910`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`
- **Description**: @throws \Exception
/

### `down`

- **Parameters**: `Schema $schema`

### `getSchemaManager`


### `isColumnExist`

- **Parameters**: `string $tableName, string $columnName`
- **Description**: @throws \Exception
/

