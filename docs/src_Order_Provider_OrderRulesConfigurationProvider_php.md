# OrderRulesConfigurationProvider.php

**Path**: `src\Order\Provider\OrderRulesConfigurationProvider.php`

## Summary
This provider class manages and evaluates cart/order rules for e-commerce orders by fetching enabled rules from the repository and checking which conditions are applicable to a given order. It acts as a configuration layer that matches order rule conditions with their corresponding cart rule implementations (registered via a service registry) and returns an array of active rule configurations that can be applied to the current order based on its channel and the rule conditions' evaluation logic.

## Classes
- `OrderRulesConfigurationProvider`

## Function Details

### `getActiveOrderRulesConfiguration`

- **Parameters**: `OrderInterface $order`

