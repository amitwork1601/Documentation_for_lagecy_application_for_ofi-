# Version20240325133644.php

**Path**: `migrations\Version20240325133644.php`

## Summary
This is a Doctrine database migration that removes Akeneo integration tables and their dependencies from the database schema. The migration systematically drops foreign key constraints from Akeneo-related tables before removing approximately 14 tables associated with Akeneo API configuration, product mappings, assets, attributes, and settings, effectively cleaning up a discontinued or replaced Akeneo e-commerce integration.

## Classes
- `Version20240325133644`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

