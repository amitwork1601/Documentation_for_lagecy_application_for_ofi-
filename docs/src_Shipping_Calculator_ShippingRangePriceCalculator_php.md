# ShippingRangePriceCalculator.php

**Path**: `src\Shipping\Calculator\ShippingRangePriceCalculator.php`

## Summary
This class implements a range-based shipping cost calculator for e-commerce orders that calculates shipping fees based on the order's total value. It integrates with Sylius's shipping system to determine shipping costs by delegating to a ShippingService that considers the shipping address, order total (excluding subscription promotions), delivery date, and channel-specific configuration to compute the final shipping amount.

## Classes
- `ShippingRangePriceCalculator`

## Function Details

### `calculate`

- **Parameters**: `BaseShipmentInterface $subject, array $configuration`

### `getType`


