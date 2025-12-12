# findOneByEmailQuery.php

**Path**: `src\CQRS\Query\User\findOneByEmailQuery.php`

## Summary
This is a CQRS (Command Query Responsibility Segregation) query object that encapsulates a user lookup request by email address. It serves as a data transfer object (DTO) in the query layer, carrying the email parameter needed to retrieve a single user entity from the data store. This pattern separates read operations from write operations and enables clean separation of concerns in the application architecture.

## Classes
- `findOneByEmailQuery`

## Function Details

### `getEmail`


