# OrderRuleCondition.php

**Path**: `src\Entity\Order\OrderRuleCondition.php`

## Summary
The `OrderRuleCondition` entity represents a configurable condition that must be met for an order rule to apply in an e-commerce system (likely Sylius-based). It stores a condition type (e.g., minimum order amount, product category), its JSON configuration parameters, and belongs to a parent `OrderRule` entity through a many-to-one relationship. This allows for flexible, data-driven business rules where multiple conditions can be attached to promotion or pricing rules to determine when they should be triggered.

## Classes
- `OrderRuleCondition`

## Function Details

### `getId`


### `getType`


### `setType`

- **Parameters**: `string $type`

### `getConfiguration`


### `setConfiguration`

- **Parameters**: `array $configuration`

### `getOrderRule`


### `setOrderRule`

- **Parameters**: `?OrderRuleInterface $orderRule`

