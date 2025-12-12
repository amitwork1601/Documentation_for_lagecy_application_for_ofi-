# SubscriptionFromCodeAware.php

**Path**: `src\Api\Attribute\SubscriptionFromCodeAware.php`

## Summary
This PHP attribute marks API classes that need a subscription object to be automatically injected from a subscription code parameter. It's used to configure dependency injection by specifying which constructor argument (defaulting to 'subscription') should receive the resolved subscription entity, enabling automatic subscription lookup and validation in API endpoints that require subscription context.

## Classes
- `SubscriptionFromCodeAware`

## Function Details

### `__construct`

- **Parameters**: `public string $constructorArgumentName = self::DEFAULT_ARGUMENT_NAME`

