# CompletedOrderExtension.php

**Path**: `src\Doctrine\Extension\CompletedOrderExtension.php`

## Summary
This Doctrine ORM extension automatically filters Order entity collections to only return completed orders when the `shop_get_orders_completed` API Platform operation is invoked. It implements `QueryCollectionExtensionInterface` to modify database queries by adding a WHERE clause that restricts results to orders with a checkout state of "completed", ensuring that only finalized orders are retrieved through this specific API endpoint.

## Classes
- `CompletedOrderExtension`

## Function Details

### `_addWhere`

- **Parameters**: `QueryBuilder $queryBuilder, string $ressourceClass, ?Operation $operation = null`

