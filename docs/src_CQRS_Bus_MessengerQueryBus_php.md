# MessengerQueryBus.php

**Path**: `src\CQRS\Bus\MessengerQueryBus.php`

## Summary
The `MessengerQueryBus` class implements the Query Bus pattern as part of a CQRS (Command Query Responsibility Segregation) architecture, serving as an adapter that wraps Symfony's Messenger component to handle query dispatching. It receives query objects implementing `QueryInterface` and delegates their execution to the underlying Symfony MessageBus, which routes them to appropriate query handlers and returns results. This abstraction allows the application to use Symfony Messenger for query handling while maintaining a clean separation between the CQRS domain logic and the messaging infrastructure.

## Classes
- `MessengerQueryBus`

## Function Details

### `__construct`

- **Parameters**: `MessageBusInterface $queryBus`

### `handle`

- **Parameters**: `QueryInterface $query`

