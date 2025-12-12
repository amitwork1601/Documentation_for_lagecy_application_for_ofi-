# OrderItemUnit.php

**Path**: `src\Entity\Order\OrderItemUnit.php`

## Summary
This class extends Sylius's base OrderItemUnit entity to calculate pricing totals for individual order item units while excluding discounts. It provides two key methods: one to retrieve the base unit price without any discounts applied, and another to calculate tax amounts specifically from non-discounted adjustments, which is essential for accurate tax reporting and compliance in e-commerce scenarios where taxes must be calculated on pre-discount prices.

## Classes
- `OrderItemUnit`

## Function Details

### `getTotalWithoutDiscount`


### `getTaxTotalWithoutDiscount`


