# QueryBusInterface.php

**Path**: `src\CQRS\Bus\QueryBusInterface.php`

## Summary
This interface defines a contract for a Query Bus in a CQRS (Command Query Responsibility Segregation) architecture. It provides a single `handle` method that accepts QueryInterface objects, serving as the central mechanism for dispatching and executing read operations (queries) in the application while maintaining separation between data retrieval and data modification concerns.

## Function Details

### `handle`

- **Parameters**: `QueryInterface $query`

