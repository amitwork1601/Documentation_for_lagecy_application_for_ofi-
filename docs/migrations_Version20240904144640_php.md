# Version20240904144640.php

**Path**: `migrations\Version20240904144640.php`

## Summary
This is a Doctrine database migration that adds a `priority` field (nullable integer) to four animal-related dictionary tables in a Sylius-based system: animal_activity, animal_condition, animal_feature, and animal_feed. The migration enables prioritization/ordering capabilities for animal taxonomy data, with a rollback method to remove these fields if needed.

## Classes
- `Version20240904144640`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

