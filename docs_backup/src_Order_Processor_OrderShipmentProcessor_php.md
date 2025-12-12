# OrderShipmentProcessor.php

**Path**: `src\Order\Processor\OrderShipmentProcessor.php`

## Summary
The `OrderShipmentProcessor` class is responsible for managing shipment creation and updates during order processing in an e-commerce system. It handles three main scenarios: removing shipments when orders don't require shipping, recalculating shipping methods for existing shipments, and creating new shipments with appropriate shipping methods (including special handling for subscription orders). The processor integrates with Sylius's order processing pipeline to ensure orders have proper shipment configurations based on their requirements and state.

## Classes
- `OrderShipmentProcessor`

## Function Details

### `process`

- **Parameters**: `BaseOrderInterface $order`

### `createNewOrderShipment`

- **Parameters**: `OrderInterface $order`

### `processShipmentUnits`

- **Parameters**: `BaseOrderInterface $order, ShipmentInterface $shipment`

### `recalculateExistingShipmentWithProperMethod`

- **Parameters**: `OrderInterface $order`

