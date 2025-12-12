# CustomerIdAware.php

**Path**: `src\Api\Attribute\CustomerIdAware.php`

## Summary
This PHP attribute marks API classes that require customer ID injection, enabling automatic resolution of customer context in API operations. It specifies which constructor argument should receive the customer ID (defaulting to 'customerId'), allowing the framework to automatically populate customer-scoped requests with the appropriate customer identifier for multi-tenant or customer-specific API operations.

## Classes
- `CustomerIdAware`

## Function Details

### `__construct`

- **Parameters**: `public string $constructorArgumentName = self::DEFAULT_ARGUMENT_NAME`

