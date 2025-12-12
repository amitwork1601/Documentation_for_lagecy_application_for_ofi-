# DoctrineDeferredProvider.php

**Path**: `src\Doctrine\DoctrineDeferredProvider.php`

## Summary
This Doctrine event listener manages deferred callback execution for newly inserted entities. It tracks entities scheduled for insertion during the `onFlush` event and executes registered callbacks after those entities are persisted (in `postFlush`), ensuring callbacks only run once entities have been assigned database IDs. This solves the problem of needing to perform operations that depend on an entity having a persisted ID, which isn't available until after the database insert completes.

## Classes
- `DoctrineDeferredProvider`

## Function Details

### `onFlush`

- **Parameters**: `OnFlushEventArgs $event`

### `postFlush`


### `deferAfterInsertion`

- **Parameters**: `$entity, $callback`

