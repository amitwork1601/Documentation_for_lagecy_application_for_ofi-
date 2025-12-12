# CommandBusInterface.php

**Path**: `src\CQRS\Bus\CommandBusInterface.php`

## Summary
This interface defines the contract for a Command Bus in a CQRS (Command Query Responsibility Segregation) architecture. It requires implementing classes to provide a `dispatch()` method that accepts command objects and executes them, serving as the central routing mechanism for handling write operations and business commands in the application without returning values.

## Function Details

### `dispatch`

- **Parameters**: `CommandInterface $command`

