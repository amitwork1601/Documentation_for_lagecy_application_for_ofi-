# Version20241115122014.php

**Path**: `migrations\Version20241115122014.php`

## Summary
This database migration adds a `priority` field (nullable integer) to five animal-related dictionary tables (breed, deleted_reason, gender, kibble_brand, and type) in what appears to be a Sylius-based pet management system. The migration enables these dictionary entries to be ordered or ranked by priority, allowing for custom sorting of animal attributes in the application's user interface or business logic.

## Classes
- `Version20241115122014`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

