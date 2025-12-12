# SubscriptionGenericFilter.php

**Path**: `src\Api\Filters\SubscriptionGenericFilter.php`

## Summary
This API Platform filter enables generic searching across subscription records by allowing searches against multiple fields simultaneously: subscription code, customer full name with email, and both subscription and customer IDs. The filter is designed to provide flexible search functionality for subscription listings, supporting both partial text matches (using LIKE) and exact ID matches across related subscription and customer entities.

## Classes
- `SubscriptionGenericFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`

