# DoctrineResetManagerSubscriber.php

**Path**: `src\EventListener\Messenger\DoctrineResetManagerSubscriber.php`

## Summary
This Symfony Messenger event subscriber resets the Doctrine entity manager after each message is processed (whether successfully handled or failed) to prevent memory leaks and stale entity references in long-running worker processes. It listens to `WorkerMessageHandledEvent` and `WorkerMessageFailedEvent` and calls `resetManager()` to ensure a fresh entity manager is available for the next message, which is critical for maintaining data consistency in asynchronous message processing.

## Classes
- `DoctrineResetManagerSubscriber`

## Function Details

### `__construct`

- **Parameters**: `ManagerRegistry $doctrine`

### `onWorkerMessageHandled`


### `onWorkerMessageFailed`


### `getSubscribedEvents`


### `clear`


