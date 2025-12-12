# Version20240709101736.php

**Path**: `migrations\Version20240709101736.php`

## Summary
This database migration adds timestamp tracking to the `sylius_admin_user_group` table by introducing `created_at` and `updated_at` fields. The migration enables automatic auditing of when admin user groups are created and modified, with both fields defaulting to the current timestamp and the ability to rollback by removing these fields.

## Classes
- `Version20240709101736`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

