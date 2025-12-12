# ResultCollectionExtensionInterface.php

**Path**: `src\Api\QueryExtension\NativeQuery\ResultCollectionExtensionInterface.php`

## Summary
This interface extends `CollectionExtensionInterface` to define a contract for query extensions that can produce final results from native SQL queries in an API Platform context. It provides two methods: one to determine if the extension supports generating results for a given resource class and operation, and another to actually execute the native query and return the transformed result collection.

## Function Details

### `supportsResult`

- **Parameters**: `string $resourceClass, ?Operation $operation = null, array $context = []`

### `getResult`

- **Parameters**: `NativeQuery $nativeQuery, ?string $resourceClass = null, ?Operation $operation = null, array $context = []`

