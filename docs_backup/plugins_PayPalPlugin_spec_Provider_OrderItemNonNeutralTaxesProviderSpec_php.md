# OrderItemNonNeutralTaxesProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\OrderItemNonNeutralTaxesProviderSpec.php`

## Summary
This is a PHPSpec test specification for a provider class that extracts non-neutral tax adjustments from order items in a PayPal integration for Sylius e-commerce platform. The test verifies that the provider correctly filters out neutral tax adjustments (which don't affect the total) and collects only non-neutral tax amounts from both the order item level and its individual units, returning an array of tax amounts needed for PayPal payment processing.

## Classes
- `OrderItemNonNeutralTaxesProviderSpec`

