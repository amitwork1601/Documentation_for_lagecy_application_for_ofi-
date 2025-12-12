# OrderPaymentTaxesApplicator.php

**Path**: `src\Taxation\Applicator\OrderPaymentTaxesApplicator.php`

## Summary
The `OrderPaymentTaxesApplicator` class calculates and applies tax adjustments to payment method charges on orders. It resolves the applicable tax rate for the order's payment method based on the tax zone, calculates the tax amount on payment charges, and creates corresponding tax adjustments that are added to the order.

## Classes
- `OrderPaymentTaxesApplicator`

## Function Details

### `apply`

- **Parameters**: `OrderInterface $order, ZoneInterface $zone`

