# CollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\Cart\CollectionProvider.php`

## Summary
This is an API Platform state provider that retrieves cart/order collections using native SQL queries with optimized performance. It constructs complex native queries to fetch orders (carts) with their related entities (customer, channel, addresses) using joins and filters, then applies query extensions for filtering/pagination and converts the results into Order entities through Doctrine's hydration system.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

