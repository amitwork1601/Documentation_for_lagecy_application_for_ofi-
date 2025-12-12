# GetCustomerQueryHandler.php

**Path**: `src\CQRS\QueryHandler\Customer\GetCustomerQueryHandler.php`

## Summary
This query handler retrieves a single Customer entity from the database using the Sylius customer repository. It implements the CQRS pattern by handling GetCustomerQuery requests and returning the corresponding Customer object (or null if not found) based on the provided customer ID.

## Classes
- `GetCustomerQueryHandler`

## Function Details

### `__invoke`

- **Parameters**: `GetCustomerQuery $query`

