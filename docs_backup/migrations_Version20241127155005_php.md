# Version20241127155005.php

**Path**: `migrations\Version20241127155005.php`

## Summary
This is a Doctrine database migration that adds environmental configuration capability to the Sylius e-commerce platform's channel system. It adds a new `env_config` JSON column to the `sylius_channel` table to store environment-specific configuration data for each sales channel, with a reversible migration that can add or remove this column as needed.

## Classes
- `Version20241127155005`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

