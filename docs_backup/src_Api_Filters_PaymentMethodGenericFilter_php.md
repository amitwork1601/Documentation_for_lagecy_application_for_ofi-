# PaymentMethodGenericFilter.php

**Path**: `src\Api\Filters\PaymentMethodGenericFilter.php`

## Summary
This API Platform custom filter enables generic search functionality for PaymentMethod entities by allowing users to search across both the payment method's code and translated name fields simultaneously. The filter performs a case-insensitive partial match (LIKE query) on the concatenated values of the code and name fields, joining with the translations table to support multi-language search capabilities.

## Classes
- `PaymentMethodGenericFilter`

## Function Details

### `getDescription`

- **Parameters**: `string $resourceClass`

