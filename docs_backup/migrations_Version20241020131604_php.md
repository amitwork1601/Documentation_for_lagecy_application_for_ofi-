# Version20241020131604.php

**Path**: `migrations\Version20241020131604.php`

## Summary
This is a Doctrine database migration for Sylius 2.0 that removes deprecated user account security columns from the User model. The migration drops the `locked`, `expires_at`, and `credentials_expire_at` columns from both `sylius_admin_user` and `sylius_shop_user` tables, streamlining the user authentication schema by removing unused account expiration and locking mechanisms.

## Classes
- `Version20241020131604`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

