# OrderItemNonNeutralTaxesProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\OrderItemNonNeutralTaxesProvider.php`

## Summary
This class collects all non-neutral tax adjustments from an order item and its units in a Sylius e-commerce system for PayPal payment processing. It iterates through both the order item's direct tax adjustments and the tax adjustments of each individual unit, filtering out neutral taxes and returning their amounts as an array (or `[0]` if no non-neutral taxes exist). This is necessary for PayPal integration to accurately report the actual tax amounts that affect the order total, excluding tax adjustments that don't impact the final price.

## Classes
- `OrderItemNonNeutralTaxesProvider`

## Function Details

### `provide`

- **Parameters**: `OrderItemInterface $orderItem`

