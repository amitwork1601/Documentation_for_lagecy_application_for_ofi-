# AdminUserGenericFilter.php

**Path**: `src\Api\Filters\AdminUserGenericFilter.php`

## Summary
This API filter enables generic search functionality for AdminUser entities by allowing users to search across multiple fields (first name, last name, and email) with a single query parameter. The filter concatenates the admin user's name and email into a searchable string and also supports direct lookup by user ID, making it easier to find admin users through a unified search interface in the API Platform.

## Classes
- `AdminUserGenericFilter`

## Function Details

### `getDescription`

- **Parameters**: `string $resourceClass`

