# CollectionProvider.php

**Path**: `src\Api\StateProvider\NativeQuery\Subscription\CollectionProvider.php`

## Summary
This class is a custom API Platform state provider that handles collection queries for Subscription entities using native SQL queries. It extends an abstract collection provider to optimize database queries by eagerly loading related entities (Channel, Customer, and shipping/billing Addresses) through left joins, preventing N+1 query problems when retrieving subscription collections through the API.

## Classes
- `CollectionProvider`

## Function Details

### `getRootTypeName`


