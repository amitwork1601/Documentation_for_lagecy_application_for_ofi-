# QueryInterface.php

**Path**: `src\CQRS\Query\QueryInterface.php`

## Summary
This file defines a marker interface for the CQRS (Command Query Responsibility Segregation) pattern's query side. `QueryInterface` serves as a type identifier to distinguish query objects (read operations that retrieve data without modifying state) from commands in the application's CQRS architecture, enabling type-hinting and ensuring proper separation of concerns between read and write operations.

