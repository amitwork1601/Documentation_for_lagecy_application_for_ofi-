# AssignCustomerHandler.php

**Path**: `src\Api\CommandHandler\Checkout\AssignCustomerHandler.php`

## Summary
This command handler assigns a customer to a shopping cart/order in an e-commerce checkout process. It retrieves a cart by token value, validates that no customer is already assigned, locks the order for thread-safety, and then associates the specified customer with the cart while optionally setting the customer's locale preferences on the order.

## Classes
- `AssignCustomerHandler`

## Function Details

### `__invoke`

- **Parameters**: `AssignCustomer $assignCustomer`

