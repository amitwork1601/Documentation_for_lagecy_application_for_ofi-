# CollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\Customer\CollectionProvider.php`

## Summary
This is a custom API Platform state provider that handles collection queries for Customer entities using native SQL queries instead of standard ORM queries. It extends the base collection provider functionality by integrating custom query extensions that can modify native SQL queries, likely for performance optimization or complex filtering requirements specific to customer data retrieval. The provider falls back to the standard ORM-based collection provider when dealing with nested/related resources rather than the root customer resource.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

