# PickupPointGenericFilter.php

**Path**: `src\Api\Filters\PickupPointGenericFilter.php`

## Summary
This filter implements a generic search functionality for PickupPoint entities in an API Platform application. It allows searching across multiple PickupPoint fields simultaneously, including the pickup point's name, token value, and its associated address (concatenating street, city, and postcode), using a single "genericFilter" query parameter with LIKE pattern matching.

## Classes
- `PickupPointGenericFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`

