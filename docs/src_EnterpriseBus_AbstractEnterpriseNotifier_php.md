# AbstractEnterpriseNotifier.php

**Path**: `src\EnterpriseBus\AbstractEnterpriseNotifier.php`

## Summary
This abstract class provides a foundation for publishing entity change notifications to Google Cloud Pub/Sub for enterprise system integration. It manages entity refresh operations before notification, handles serialization of entities, and publishes messages to a configured Pub/Sub topic while tracking entities that fail to refresh or encounter errors during the notification process.

## Classes
- `AbstractEnterpriseNotifier`

## Function Details

### `notify`

- **Parameters**: `array|string|int $identifier, object $entity`

### `registerEntityInError`

- **Parameters**: `$entity`

### `prepareMessage`

- **Parameters**: `object $entity`

### `getSerializationGroups`


### `notifyDeletion`

- **Parameters**: `array|string|int $identifier`

### `registerEntityToRefresh`

- **Parameters**: `$entity`

