# SubscriptionCodeAware.php

**Path**: `src\Api\Attribute\SubscriptionCodeAware.php`

## Summary
This PHP attribute marks API classes that require subscription code awareness, indicating they need a subscription code parameter (defaulting to 'subscriptionCode') injected into their constructor. It serves as metadata for dependency injection or middleware systems to automatically provide subscription context to API endpoints that operate within the scope of a specific subscription.

## Classes
- `SubscriptionCodeAware`

## Function Details

### `__construct`

- **Parameters**: `public string $constructorArgumentName = self::DEFAULT_ARGUMENT_NAME`

