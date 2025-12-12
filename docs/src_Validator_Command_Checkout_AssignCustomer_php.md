# AssignCustomer.php

**Path**: `src\Validator\Command\Checkout\AssignCustomer.php`

## Summary
This is a Symfony validation constraint class for validating customer assignment operations during the checkout process. It defines error messages for various business rule violations including cart existence checks, ensuring a cart isn't already assigned to another customer, customer validity, and verifying that the customer's channel matches the order's channel. The constraint operates at the class level to validate the entire command object rather than individual properties.

## Classes
- `AssignCustomer`

## Function Details

### `getTargets`


