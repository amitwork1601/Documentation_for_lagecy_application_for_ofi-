# SubscriptionItemIdAware.php

**Path**: `src\Api\Attribute\SubscriptionItemIdAware.php`

## Summary
This code defines a PHP attribute class used to mark API classes that require a subscription item ID parameter. It serves as metadata to indicate which constructor argument (defaulting to 'subscriptionItemId') should receive the subscription item identifier, likely used by a dependency injection or API routing system to automatically inject subscription-related context into request handlers or services.

## Classes
- `SubscriptionItemIdAware`

## Function Details

### `__construct`

- **Parameters**: `public string $constructorArgumentName = self::DEFAULT_ARGUMENT_NAME`

