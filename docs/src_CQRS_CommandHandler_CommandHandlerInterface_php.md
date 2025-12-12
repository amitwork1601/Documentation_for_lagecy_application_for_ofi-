# CommandHandlerInterface.php

**Path**: `src\CQRS\CommandHandler\CommandHandlerInterface.php`

## Summary
This file defines a marker interface for the Command pattern implementation in a CQRS (Command Query Responsibility Segregation) architecture. The empty `CommandHandlerInterface` serves as a type contract that all command handlers in the application must implement, enabling type-hinting and dependency injection while allowing specific command handlers to define their own execution methods. This interface facilitates the separation of write operations (commands) from read operations (queries) in the application's architecture.

