# CollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\Address\CollectionProvider.php`

## Summary
The `CollectionProvider` class is a custom API Platform state provider that retrieves collections of `Address` entities using native SQL queries instead of standard Doctrine ORM queries. It serves as a wrapper around the base collection provider, allowing the application to apply custom query extensions specifically designed for native queries (via `CollectionExtensionInterface` and `ResultCollectionExtensionInterface`) while maintaining API Platform's pagination and filtering capabilities for address resources.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

