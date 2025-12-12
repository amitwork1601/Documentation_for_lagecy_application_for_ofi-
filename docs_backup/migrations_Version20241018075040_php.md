# Version20241018075040.php

**Path**: `migrations\Version20241018075040.php`

## Summary
This is a Doctrine database migration for Sylius e-commerce platform that adds performance optimization indexes to the `sylius_address_log_entries` table. Specifically, it creates two indexes on the `object_id` and `object_class` columns to improve query performance when looking up address change history logs associated with specific entities. The migration includes a rollback method to remove these indexes if needed.

## Classes
- `Version20241018075040`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

