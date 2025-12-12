# Version20231214131513.php

**Path**: `migrations\Version20231214131513.php`

## Summary
This Doctrine database migration renames multiple Sylius subscription-related tables by prefixing them with "old_". The migration is designed to preserve existing subscription data by renaming 9 tables (including subscription, configuration, frequency, items, logs, payments, and orders) before likely being replaced with a new subscription system implementation.

## Classes
- `Version20231214131513`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

