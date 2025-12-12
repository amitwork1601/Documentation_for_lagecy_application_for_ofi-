# OrderRuleFactoryInterface.php

**Path**: `src\Factory\OrderRuleFactoryInterface.php`

## Summary
This interface defines a factory contract for creating order rule entities in an e-commerce system, extending Sylius's resource factory pattern. It requires implementations to provide a `createWithType()` method that instantiates `OrderRuleInterface` objects based on a specified rule type, enabling the creation of different kinds of order-related business rules (such as discounts, promotions, or validation rules) in a standardized way.

## Function Details

### `createWithType`

- **Parameters**: `string $type`

