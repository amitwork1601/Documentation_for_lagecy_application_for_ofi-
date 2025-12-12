# AdminUser.php

**Path**: `src\Entity\User\AdminUser.php`

## Summary
The `AdminUser` entity extends Sylius's base admin user class to represent administrative users in the system with additional group-based permissions. It adds a many-to-one relationship with `AdminUserGroup` and implements role inheritance where users automatically receive access rights from their assigned group. The class is exposed as a GraphQL API resource with extensive filtering capabilities (by name, username, group, locale, enabled status) for querying and managing administrators.

## Classes
- `AdminUser`

## Function Details

### `getGroup`


### `setGroup`

- **Parameters**: `?AdminUserGroup $group`

### `getRoles`


### `getAccessRights`


### `getFullname`


