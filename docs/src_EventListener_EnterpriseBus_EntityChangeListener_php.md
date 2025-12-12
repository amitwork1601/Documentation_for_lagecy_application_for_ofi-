# EntityChangeListener.php

**Path**: `src\EventListener\EnterpriseBus\EntityChangeListener.php`

## Summary
The `EntityChangeListener` is a Doctrine event listener that monitors database changes (inserts, updates, deletes) for various e-commerce entities and synchronizes them with an Enterprise Bus system. It listens to `onFlush` and `postFlush` events to buffer changes to entities like Orders, Customers, Subscriptions, Promotions, and related objects (Payments, Shipments, Animals, etc.), then notifies the Enterprise Bus via specialized notifier services to keep external systems in sync with the application's data changes.

## Classes
- `EntityChangeListener`

## Function Details

### `onFlush`

- **Parameters**: `OnFlushEventArgs $event`

### `postFlush`

- **Parameters**: `PostFlushEventArgs $event`

### `reset`


### `hasChangeToNotify`


### `verifyEntityState`

- **Parameters**: `EntityManager $entityManager, object $entity`

### `registerNotification`

- **Parameters**: `string $className, object $object, $identifier, bool $deletion = false`

