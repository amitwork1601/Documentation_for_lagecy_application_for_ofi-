# CollectionProvider.php

**Path**: `src\Api\StateProvider\Shop\Subscription\CollectionProvider.php`

## Summary
This API Platform state provider retrieves a collection of subscriptions for the currently authenticated shop user. It fetches all subscriptions associated with the logged-in customer from the database, or returns an empty array if the user is not authenticated or lacks the appropriate role, enabling customers to view their subscription history through the shop API.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

