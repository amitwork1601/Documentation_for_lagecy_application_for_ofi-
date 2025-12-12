# ShippingMethodGenericFilter.php

**Path**: `src\Api\Filters\ShippingMethodGenericFilter.php`

## Summary
This is an API Platform custom filter for the ShippingMethod entity that implements a generic search functionality across multiple fields. It allows users to search shipping methods by performing a case-insensitive LIKE query that concatenates and matches against both the shipping method's code and its translated name fields. The filter enhances the API's search capabilities by enabling a single search parameter (`genericFilter`) to query across these combined attributes simultaneously.

## Classes
- `ShippingMethodGenericFilter`

## Function Details

### `getDescription`

- **Parameters**: `string $resourceClass`

