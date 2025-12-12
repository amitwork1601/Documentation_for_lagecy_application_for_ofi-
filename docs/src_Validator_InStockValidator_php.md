# InStockValidator.php

**Path**: `src\Validator\InStockValidator.php`

## Summary
The `InStockValidator` class is a custom Symfony validator that decorates Sylius's default inventory validator to add subscription-aware stock validation. It checks product variant availability by considering whether an order is a subscription order (which may have different stock requirements), and adds a validation violation if the item is not in stock based on the order type.

## Classes
- `InStockValidator`

## Function Details

### `__construct`

- **Parameters**: `private readonly AvailabilityCheckerInterface $availabilityChecker`

### `validate`

- **Parameters**: `$value, Constraint $constraint`

