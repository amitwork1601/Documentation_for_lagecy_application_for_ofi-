# CollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\Promotion\CollectionProvider.php`

## Summary
This class is an API Platform state provider that handles collection-based queries for Promotion entities using native SQL queries. It extends AbstractCollectionProvider to leverage custom query logic for retrieving multiple promotions, prioritized at level 10 in the dependency injection container to override default collection providers for the Promotion resource.

## Classes
- `CollectionProvider`

## Function Details

### `getRootTypeName`


