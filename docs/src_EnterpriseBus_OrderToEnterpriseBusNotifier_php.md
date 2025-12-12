# OrderToEnterpriseBusNotifier.php

**Path**: `src\EnterpriseBus\OrderToEnterpriseBusNotifier.php`

## Summary
This class handles notifying an enterprise bus system about Order entities, implementing business logic that filters out orders completed more than 15 days ago (unless forced). It extends AbstractEnterpriseNotifier to serialize and send Order data (along with associated Payment information) to an external enterprise bus, using specific serialization groups for the order data format.

## Classes
- `OrderToEnterpriseBusNotifier`

## Function Details

### `notify`

- **Parameters**: `$identifier, object $entity, bool $refreshEntity = true, bool $force = false`

### `shouldNotifyOrder`

- **Parameters**: `Order $order`

### `getSerializationGroups`


