# MessengerCommandBus.php

**Path**: `src\CQRS\Bus\MessengerCommandBus.php`

## Summary
The `MessengerCommandBus` class is an adapter that bridges the application's CQRS command bus interface with Symfony's Messenger component. It implements the `CommandBusInterface` to provide a standardized way to dispatch command objects through Symfony's message bus infrastructure, enabling asynchronous command processing and decoupling command dispatching from command handling logic. This class serves as a thin wrapper that ensures commands conforming to `CommandInterface` can be routed through Symfony Messenger's transport layer.

## Classes
- `MessengerCommandBus`

## Function Details

### `__construct`

- **Parameters**: `MessageBusInterface $commandBus`

### `dispatch`

- **Parameters**: `CommandInterface $command`

