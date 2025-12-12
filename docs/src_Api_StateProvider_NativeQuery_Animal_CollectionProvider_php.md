# CollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\Animal\CollectionProvider.php`

## Summary
This class is a custom API Platform state provider that handles the retrieval of Animal entity collections using native SQL queries. It extends an abstract collection provider to build a query that fetches only non-deleted animals that are associated with a customer (have a customer_id), effectively filtering the collection based on soft-delete and ownership criteria before returning results through the API.

## Classes
- `CollectionProvider`

## Function Details

### `getRootTypeName`


