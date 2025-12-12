# Version20250526134227.php

**Path**: `migrations\Version20250526134227.php`

## Summary
This is a Doctrine database migration that adds a `updReferencePrefix` configuration value to the `env_config` JSON field of specific sales channels in a Sylius e-commerce system. It sets the prefix to 'AC' for the France channel and 'EC' for the Belgique (Belgium) channel, with a rollback capability to remove these prefixes if needed.

## Classes
- `Version20250526134227`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

