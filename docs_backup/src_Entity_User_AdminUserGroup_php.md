# AdminUserGroup.php

**Path**: `src\Entity\User\AdminUserGroup.php`

## Summary
This entity represents an administrative user group in a Sylius-based application, managing access control and permissions for admin users. It stores group metadata (name, access rights/roles) and maintains a one-to-many relationship with AdminUser entities, allowing multiple admin users to be organized under a single group with shared permissions. The class is exposed via GraphQL API with query capabilities and includes timestampable behavior for tracking creation and modification dates.

## Classes
- `AdminUserGroup`

## Function Details

### `__construct`


### `getId`


### `getName`


### `setName`

- **Parameters**: `string $name`

### `getAccessRights`


### `setAccessRights`

- **Parameters**: `?array $accessRights`

### `getAdminUsers`


### `hasAdminUser`

- **Parameters**: `AdminUser $adminUser`

### `addAdminUser`

- **Parameters**: `AdminUser $adminUser`

### `removeAdminUser`

- **Parameters**: `AdminUser $adminUser`

