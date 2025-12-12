# AddTrackingShippingNumberHandler.php

**Path**: `src\Api\CommandHandler\Order\AddTrackingShippingNumberHandler.php`

## Summary
This command handler processes the addition of tracking numbers to order shipments in an e-commerce system. It retrieves an order by token, manages shipment state transitions (marking shipments as shipped), uses locking to prevent concurrent modifications, and triggers email notifications to customers about their shipped orders. The handler integrates with Sylius e-commerce framework components and coordinates between order management, shipping services, and the event/messaging system.

## Classes
- `AddTrackingShippingNumberHandler`

## Function Details

### `__invoke`

- **Parameters**: `AddTrackingShippingNumber $command`
- **Description**: @throws \Exception
/

### `applyShipTransitionToOrderShipments`

- **Parameters**: `Order $order`

