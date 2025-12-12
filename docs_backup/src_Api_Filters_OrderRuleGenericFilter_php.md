# OrderRuleGenericFilter.php

**Path**: `src\Api\Filters\OrderRuleGenericFilter.php`

## Summary
This file implements a custom API Platform filter for the OrderRule entity that enables generic text-based searching. The filter performs a case-insensitive LIKE query on the OrderRule's `name` field when the `genericFilter` query parameter is provided, allowing users to search for order rules by partial name matches through the API.

## Classes
- `OrderRuleGenericFilter`

## Function Details

### `getDescription`

- **Parameters**: `string $resourceClass`

