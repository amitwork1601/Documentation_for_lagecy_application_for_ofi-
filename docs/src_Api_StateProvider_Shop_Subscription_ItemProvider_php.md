# ItemProvider.php

**Path**: `src\Api\StateProvider\Shop\Subscription\ItemProvider.php`

## Summary
This API Platform state provider retrieves a single Subscription entity for the currently authenticated shop user. It ensures users can only access their own subscriptions by filtering the query based on both the subscription code from the URL and the customer associated with the authenticated user, returning null if the user is not authenticated or doesn't have the proper role.

## Classes
- `ItemProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

