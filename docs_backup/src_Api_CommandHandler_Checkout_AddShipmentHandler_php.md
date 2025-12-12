# AddShipmentHandler.php

**Path**: `src\Api\CommandHandler\Checkout\AddShipmentHandler.php`

## Summary
This command handler processes the addition of shipments to orders in an e-commerce checkout system. It retrieves an order by token, creates or updates a shipment with tracking information using a locking mechanism to prevent race conditions, transitions the shipment state through a state machine, and dispatches email notifications when shipments are shipped. The handler integrates with Sylius e-commerce components and manages the complete shipment creation workflow including persistence, state management, and customer communication.

## Classes
- `AddShipmentHandler`

## Function Details

### `__invoke`

- **Parameters**: `AddShipment $command`

### `findExistingShipmentToUpdate`

- **Parameters**: `Order $order, string $tracking`

### `createShipmentWithTracking`

- **Parameters**: `Order $order, string $tracking`

### `updateShipmentWithTracking`

- **Parameters**: `Shipment $shipment, string $tracking`

