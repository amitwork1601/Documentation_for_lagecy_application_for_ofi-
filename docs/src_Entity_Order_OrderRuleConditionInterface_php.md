# OrderRuleConditionInterface.php

**Path**: `src\Entity\Order\OrderRuleConditionInterface.php`

## Summary
This interface defines the contract for order rule conditions, which are used to specify criteria that must be met for order-based business rules to apply. It provides methods to manage the condition's type, configuration parameters stored as an array, and its association with a parent OrderRule entity. This is part of a flexible rules engine system that allows dynamic configuration of conditions (e.g., minimum order amount, specific products, customer segments) that trigger order-related actions or discounts.

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

