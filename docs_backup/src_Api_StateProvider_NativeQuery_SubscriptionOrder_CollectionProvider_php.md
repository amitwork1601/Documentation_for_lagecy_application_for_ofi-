# CollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\SubscriptionOrder\CollectionProvider.php`

## Summary
This class is a custom API Platform state provider for fetching `SubscriptionOrder` collections using native SQL queries instead of standard Doctrine ORM queries. It extends the base collection provider to optimize complex queries involving subscription orders and their related entities (customers, channels, addresses, subscriptions) by building and executing native SQL with custom query extensions, then hydrating the results back into entity objects while maintaining API Platform's pagination support.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

