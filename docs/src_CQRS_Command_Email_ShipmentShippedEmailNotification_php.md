# ShipmentShippedEmailNotification.php

**Path**: `src\CQRS\Command\Email\ShipmentShippedEmailNotification.php`

## Summary
This class is a CQRS command object that represents an intent to send an email notification when a shipment has been shipped. It encapsulates the shipment ID as immutable data, serving as a message/command that will be dispatched to a handler responsible for triggering the actual email notification logic in the e-commerce or logistics domain.

## Classes
- `ShipmentShippedEmailNotification`

## Function Details

### `__construct`

- **Parameters**: `private int $shipmentId`

### `getShipmentId`


