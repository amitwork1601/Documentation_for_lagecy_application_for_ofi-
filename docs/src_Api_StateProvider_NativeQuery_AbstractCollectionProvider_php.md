# AbstractCollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\AbstractCollectionProvider.php`

## Summary
This abstract class serves as a base provider for API Platform collection endpoints that need to use native SQL queries instead of standard Doctrine ORM queries. It determines whether to use native queries or fall back to the standard collection provider, builds custom selection queries through extending classes, and applies query extensions (like filters and pagination) to native queries before executing them. The provider is designed to handle cases where complex SQL queries are needed that can't be easily expressed through Doctrine's QueryBuilder, while still maintaining compatibility with API Platform's filtering and pagination features.

## Classes
- `AbstractCollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

### `getRootTypeName`


