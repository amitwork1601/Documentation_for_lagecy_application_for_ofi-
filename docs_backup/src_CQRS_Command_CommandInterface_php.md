# CommandInterface.php

**Path**: `src\CQRS\Command\CommandInterface.php`

## Summary
This file defines a marker interface for the Command pattern implementation in a CQRS (Command Query Responsibility Segregation) architecture. The empty `CommandInterface` serves as a type contract that all command objects must implement, allowing the application to distinguish commands (write operations that modify state) from queries (read operations) and enabling type-hinting for command handlers and buses.

