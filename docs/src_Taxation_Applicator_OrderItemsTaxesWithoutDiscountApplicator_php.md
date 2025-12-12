# OrderItemsTaxesWithoutDiscountApplicator.php

**Path**: `src\Taxation\Applicator\OrderItemsTaxesWithoutDiscountApplicator.php`

## Summary
This class calculates and applies tax adjustments to order items in an e-commerce system, specifically calculating taxes on the base item prices **without** including any promotional discounts. It resolves the appropriate tax rate for each product variant, calculates the tax amount, and distributes it proportionally across order item units while clearing any existing tax adjustments first.

## Classes
- `OrderItemsTaxesWithoutDiscountApplicator`

## Function Details

### `apply`

- **Parameters**: `OrderInterface $order, ZoneInterface $zone`
- **Description**: @throws \InvalidArgumentException
/

### `clearAdjustments`

- **Parameters**: `OrderInterface $order`

### `addAdjustment`

- **Parameters**: `OrderItemUnitInterface $unit, int $taxAmount, TaxRateInterface $taxRate`

