# SubscriptionOrderProvider.php

**Path**: `src\Subscription\Provider\SubscriptionOrderProvider.php`

## Summary
The `SubscriptionOrderProvider` class extracts and converts subscription order IRIs from HTTP requests into an array of token values. It retrieves subscription order IRIs from the request payload, converts them to `SubscriptionOrder` entities using ApiPlatform's IRI converter, and returns an array containing only their token values, filtering out any invalid resources.

## Classes
- `SubscriptionOrderProvider`

## Function Details

### `__construct`

- **Parameters**: `private IriConverterInterface $iriConverter`

### `getArraySubscriptionOrdersTokenValue`

- **Parameters**: `Request $request`

