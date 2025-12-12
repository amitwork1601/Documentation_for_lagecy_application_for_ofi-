# SubscriptionAwareContextBuilder.php

**Path**: `src\Api\Serializer\ContextBuilder\SubscriptionAwareContextBuilder.php`

## Summary
This context builder is responsible for automatically resolving and injecting Subscription entities into API Platform serialization contexts based on a subscription code from the URI. It extends Sylius's input context builder pattern to query the subscription repository when a 'code' URI variable is present, enabling automatic subscription lookup for API endpoints that require subscription context during serialization/deserialization operations.

## Classes
- `SubscriptionAwareContextBuilder`

## Function Details

### `supports`

- **Parameters**: `Request $request, array $context, ?array $extractedAttributes`

### `resolveValue`

- **Parameters**: `array $context, ?array $extractedAttributes`

