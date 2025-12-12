# ShipShipmentHandler.php

**Path**: `src\Api\CommandHandler\Checkout\ShipShipmentHandler.php`

## Summary
This command handler processes the shipping/dispatch of an order shipment in an e-commerce checkout flow. It validates the shipment exists, optionally sets a tracking code and checks shipment enricher availability, transitions the shipment state to "shipped" using a state machine, and dispatches an email notification to inform the customer that their order has been shipped.

## Classes
- `ShipShipmentHandler`

## Function Details

### `__invoke`

- **Parameters**: `ShipShipment $shipShipment`

