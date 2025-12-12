# PaymentGenericFilter.php

**Path**: `src\Api\Filters\PaymentGenericFilter.php`

## Summary
The `PaymentGenericFilter` class is an API Platform filter that enables multi-field search functionality for Payment entities. It allows searching across payment IDs, related order details (token value and order number), and customer information (concatenated first name, last name, and email) using a single generic search term, facilitating flexible payment lookups in the admin or API interface.

## Classes
- `PaymentGenericFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`

