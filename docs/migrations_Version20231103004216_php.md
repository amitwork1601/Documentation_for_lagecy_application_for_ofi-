# Version20231103004216.php

**Path**: `migrations\Version20231103004216.php`

## Summary
This is a Doctrine database migration for the Sylius e-commerce platform that adds unique indexes to password reset and email verification token fields. The migration ensures that `password_reset_token` and `email_verification_token` columns are unique across both the `sylius_admin_user` and `sylius_shop_user` tables, preventing duplicate tokens from being generated. This enhancement improves security by guaranteeing that each reset/verification token can only be associated with a single user account.

## Classes
- `Version20231103004216`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

