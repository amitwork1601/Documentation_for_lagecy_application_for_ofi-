# DeleteCustomerAction.php

**Path**: `src\Api\Controller\Customer\DeleteCustomerAction.php`

## Summary
This API controller handles HTTP requests to delete a customer from the system. It validates that a customer ID is provided and exists in the repository, then dispatches a `DeleteCustomer` command through the message bus for asynchronous processing, returning a 204 No Content response on success or throwing a 404 exception if the customer is not found.

## Classes
- `DeleteCustomerAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

