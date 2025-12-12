# OrderItemUnitsTaxesWithoutDiscountApplicator.php

**Path**: `src\Taxation\Applicator\OrderItemUnitsTaxesWithoutDiscountApplicator.php`

## Summary
This class applies tax calculations to individual order item units in an e-commerce system, specifically calculating taxes based on unit prices **before** discounts are applied. It resolves the appropriate tax rate for each product variant based on the tax zone, calculates the tax amount using the undiscounted unit total, and creates tax adjustments that are added to each order item unit.

## Classes
- `OrderItemUnitsTaxesWithoutDiscountApplicator`

## Function Details

### `apply`

- **Parameters**: `OrderInterface $order, ZoneInterface $zone`

### `clearAdjustments`

- **Parameters**: `OrderInterface $order`

### `addAdjustment`

- **Parameters**: `OrderItemUnitInterface $unit, int $taxAmount, TaxRateInterface $taxRate`

