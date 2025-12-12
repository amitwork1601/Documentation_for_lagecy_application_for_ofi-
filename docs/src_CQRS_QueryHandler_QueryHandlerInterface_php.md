# QueryHandlerInterface.php

**Path**: `src\CQRS\QueryHandler\QueryHandlerInterface.php`

## Summary
This file defines a marker interface for the Query Handler pattern within a CQRS (Command Query Responsibility Segregation) architecture. It serves as a contract that all query handler classes must implement, enabling type-hinting and ensuring query handlers can be identified and processed uniformly by the application's query bus or dispatcher. The empty interface acts as a common type for all classes responsible for handling read operations and retrieving data without modifying system state.

