# SubscriptionCommentIdAware.php

**Path**: `src\Api\Attribute\SubscriptionCommentIdAware.php`

## Summary
This PHP attribute marks API classes that require a subscription comment ID parameter in their constructor. It serves as metadata to indicate that the target class needs subscription comment identification, with a configurable constructor argument name that defaults to 'subscriptionCommentId', likely used for dependency injection or automatic parameter resolution in the API layer.

## Classes
- `SubscriptionCommentIdAware`

## Function Details

### `__construct`

- **Parameters**: `public string $constructorArgumentName = self::DEFAULT_ARGUMENT_NAME`

