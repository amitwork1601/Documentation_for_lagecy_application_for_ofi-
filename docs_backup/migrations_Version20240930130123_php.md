# Version20240930130123.php

**Path**: `migrations\Version20240930130123.php`

## Summary
This is a Doctrine database migration that adds an optional `icon` column (VARCHAR 255) to three animal-related tables: `sylius_animal_activity`, `sylius_animal_condition`, and `sylius_animal_feed`. The migration enables these entities to store icon references for visual representation in the UI, with a rollback method to remove the columns if needed.

## Classes
- `Version20240930130123`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

