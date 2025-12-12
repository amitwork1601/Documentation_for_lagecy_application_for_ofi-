# PayPalItemDataProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Provider\PayPalItemDataProviderSpec.php`

## Summary
This is a PHPSpec test specification for `PayPalItemDataProvider`, which tests the functionality of transforming Sylius order items into PayPal's required payment data format. The class verifies that order items are correctly converted into PayPal-compatible arrays containing product details (name, price, quantity), tax information, and totals with proper currency formatting, ensuring accurate data transmission to PayPal's payment API.

## Classes
- `PayPalItemDataProviderSpec`

## Function Details

### `let`

- **Parameters**: `OrderItemNonNeutralTaxesProviderInterface $orderItemNonNeutralTaxesProvider`

