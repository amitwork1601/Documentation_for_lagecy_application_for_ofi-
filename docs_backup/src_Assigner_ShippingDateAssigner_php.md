# ShippingDateAssigner.php

**Path**: `src\Assigner\ShippingDateAssigner.php`

## Summary
This class is a decorator for Sylius's shipping date assignment functionality that automatically sets the shipped date/time on a shipment. When a shipment is processed, it assigns the current DateTime to the shipment's `shippedAt` field, effectively recording when the shipment was dispatched in the e-commerce order fulfillment workflow.

## Classes
- `ShippingDateAssigner`

## Function Details

### `assign`

- **Parameters**: `ShipmentInterface $shipment`

