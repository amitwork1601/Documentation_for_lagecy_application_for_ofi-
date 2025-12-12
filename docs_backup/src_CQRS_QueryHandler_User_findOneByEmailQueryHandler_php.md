# findOneByEmailQueryHandler.php

**Path**: `src\CQRS\QueryHandler\User\findOneByEmailQueryHandler.php`

## Summary
This is a CQRS query handler that retrieves a single user entity by their email address from the shop user repository. It implements the QueryHandlerInterface and acts as a bridge between the application's query layer and Sylius's user repository, enabling email-based user lookups in an e-commerce context following the Command Query Responsibility Segregation pattern.

## Classes
- `findOneByEmailQueryHandler`

## Function Details

### `__invoke`

- **Parameters**: `findOneByEmailQuery $query`

