# CollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\Payment\CollectionProvider.php`

## Summary
This class is an API Platform state provider that handles fetching collections of Payment entities using native database queries. It extends `AbstractCollectionProvider` to leverage custom query logic while specifying `Payment` as the root entity type, and is registered with priority 10 in the API Platform's state provider system to intercept and customize how payment collection endpoints retrieve data.

## Classes
- `CollectionProvider`

## Function Details

### `getRootTypeName`


