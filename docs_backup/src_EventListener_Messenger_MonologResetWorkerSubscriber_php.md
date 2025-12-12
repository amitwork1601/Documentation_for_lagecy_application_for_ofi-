# MonologResetWorkerSubscriber.php

**Path**: `src\EventListener\Messenger\MonologResetWorkerSubscriber.php`

## Summary
This event subscriber manages Monolog logger cleanup in Symfony Messenger workers by clearing logger handlers and processors after each message is processed (whether handled successfully or failed). It prevents memory leaks and state pollution in long-running worker processes by resetting buffered log data between message processing cycles, ensuring each message starts with a clean logging state.

## Classes
- `MonologResetWorkerSubscriber`

## Function Details

### `__construct`

- **Parameters**: `LoggerInterface $logger`

### `onWorkerMessageHandled`


### `onWorkerMessageFailed`


### `getSubscribedEvents`


### `clear`


### `doClear`

- **Parameters**: `array $subjects`

