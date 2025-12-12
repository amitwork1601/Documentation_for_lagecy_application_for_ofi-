# DeleteCustomerHandler.php

**Path**: `src\Api\CommandHandler\Customer\DeleteCustomerHandler.php`

## Summary
This command handler processes customer deletion requests in a Symfony application using a two-tier deletion strategy. When invoked, it attempts a hard delete (removing the customer entity and associated business report from the database) if the customer is deletable, otherwise it performs a soft delete by only removing the associated shop user account. The handler uses Doctrine ORM for entity management and validates that the customer exists before proceeding with deletion.

## Classes
- `DeleteCustomerHandler`

## Function Details

### `__invoke`

- **Parameters**: `DeleteCustomer $deleteCustomer`

