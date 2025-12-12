# CollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\Product\CollectionProvider.php`

## Summary
This class is an API Platform state provider specifically for retrieving collections of Product entities using native SQL queries. It extends an abstract collection provider to implement custom data fetching logic for Product listings, with a priority of 10 in the service container to potentially override default providers. The provider integrates with API Platform's state management system to handle GET collection operations for Product resources through native database queries rather than standard ORM methods.

## Classes
- `CollectionProvider`

## Function Details

### `getRootTypeName`


