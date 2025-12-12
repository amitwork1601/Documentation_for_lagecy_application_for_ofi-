# PayPalItemDataProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\PayPalItemDataProvider.php`

## Summary
The `PayPalItemDataProvider` class transforms Sylius order items into PayPal-compatible payment data structures. It iterates through order items, calculates item values and non-neutral taxes (taxes that affect pricing), and formats them according to PayPal's API requirements, including both decimal and integer representations of monetary values for precision.

## Classes
- `PayPalItemDataProvider`

## Function Details

### `__construct`

- **Parameters**: `OrderItemNonNeutralTaxesProviderInterface $orderItemNonNeutralTaxesProvider`

### `provide`

- **Parameters**: `OrderInterface $order`

