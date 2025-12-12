# AdminUserGroupFilter.php

**Path**: `src\Api\Filters\AdminUserGroupFilter.php`

## Summary
This is a custom API Platform filter for the AdminUser entity that enables filtering admin users by their associated group membership. The filter accepts an array of group names (case-insensitive), performs a left join on the admin user's group relation, and matches users whose group names are in the provided list, with special handling to also include users with no group when 'NULL' is specified in the filter values.

## Classes
- `AdminUserGroupFilter`

## Function Details

### `getDescription`

- **Parameters**: `string $resourceClass`

