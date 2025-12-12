# CartValidityCheckerInterface.php

**Path**: `src\Order\Rule\Checker\CartValidityCheckerInterface.php`

## Summary
This interface defines a contract for validating shopping cart orders against business rules in an e-commerce system. It requires implementing classes to provide a `validate()` method that accepts an order and returns a list of rule violations, enabling the application to enforce cart-level constraints (such as minimum order amounts, item availability, or shipping restrictions) before order processing.

## Function Details

### `validate`

- **Parameters**: `OrderInterface $order`

