# Version20240411142753.php

**Path**: `migrations\Version20240411142753.php`

## Summary
This is a Doctrine database migration that removes the BitBag ACL (Access Control List) Bundle from a Sylius e-commerce application. The migration drops foreign key constraints and then removes three ACL-related database tables (`bitbag_acl_role`, `bitbag_acl_role_translation`, `bitbag_admin_users_roles_resources`) and removes the `enablePermissionChecker` column from the `sylius_admin_user` table, effectively uninstalling the ACL permission system.

## Classes
- `Version20240411142753`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `getSchemaManager`


### `down`

- **Parameters**: `Schema $schema`

