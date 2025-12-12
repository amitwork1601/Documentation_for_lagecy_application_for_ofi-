# CollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\Order\CollectionProvider.php`

## Summary
This class is a custom API Platform state provider for Order entity collections that uses native SQL queries instead of standard Doctrine ORM queries for performance optimization. It extends the base collection provider functionality by applying custom query extensions (filters, sorting, etc.) to native SQL queries, then converts the results back to Order entities with related data (Address, Channel, Customer) and handles pagination. The provider falls back to the standard collection provider for nested/subresource operations and is specifically designed to optimize complex Order listing queries that may be slow with standard ORM approaches.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

