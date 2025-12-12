# GetCustomerQuery.php

**Path**: `src\CQRS\Query\Customer\GetCustomerQuery.php`

## Summary
This is a CQRS query object that represents a request to retrieve a specific customer's data from the system. It encapsulates the customer ID as an immutable parameter and implements the QueryInterface, following the Command Query Responsibility Segregation pattern. This query would be dispatched to a query handler that fetches and returns customer information based on the provided ID.

## Classes
- `GetCustomerQuery`

## Function Details

### `getCustomerId`


