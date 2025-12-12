# Version20231221093533.php

**Path**: `migrations\Version20231221093533.php`

## Summary
This is a Doctrine database migration that creates an admin user group system for a Sylius e-commerce application. It establishes a new `sylius_admin_user_group` table to store group names and JSON-encoded access rights, then adds a foreign key relationship from `sylius_admin_user` to support assigning admin users to groups for role-based access control. The migration includes a rollback method to cleanly remove these changes if needed.

## Classes
- `Version20231221093533`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

