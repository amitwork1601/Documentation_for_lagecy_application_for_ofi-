# RuleAbstract.php

**Path**: `src\Order\Rule\RuleAbstract.php`

## Summary
The `RuleAbstract` class is an abstract base class for implementing order-level business rules in an e-commerce system, extending cart rule functionality. It provides common logic for validating whether rules can be applied to orders (checking cart state and channel configuration) and calculating order totals/quantities, with optional filtering by product taxons (categories). This class serves as a foundation for specific rule implementations that need to evaluate order conditions and perform calculations based on order items and their product classifications.

## Classes
- `RuleAbstract`

## Function Details

### `mayBeAppliedOnOrder`

- **Parameters**: `OrderInterface $order, OrderRuleConditionInterface $condition`

### `getTotalOrderItems`

- **Parameters**: `OrderInterface $order, array $taxons = []`

### `getItemsQuantity`

- **Parameters**: `OrderInterface $order, array $taxons = []`

### `canBeCalculate`

- **Parameters**: `OrderItem $orderItem, array $taxons`

### `hasProductValidTaxon`

- **Parameters**: `ProductInterface $product, array $taxons`

