# ItemProvider.php

**Path**: `src\Api\StateProvider\Shop\SubscriptionOrder\ItemProvider.php`

## Summary
This API Platform state provider retrieves a single SubscriptionOrder entity for authenticated shop users by matching the order's token value with the current customer. It ensures users can only access their own subscription orders by filtering results based on both the URI token parameter and the authenticated customer's identity, returning null if the user is not properly authenticated or the order doesn't belong to them.

## Classes
- `ItemProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

