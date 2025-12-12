# ShipmentShippedEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\ShipmentShippedEmailHandler.php`

## Summary
This handler processes shipment notification commands by sending a transactional email to customers when their order has been shipped. It retrieves shipment details (including tracking information and shipping method), validates that the shipment, order, and customer exist, and uses the TransactionalEmailService to send a shipment confirmation email with tracking URL and related order information.

## Classes
- `ShipmentShippedEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `ShipmentShippedEmailNotification $message`

### `getHandledMessages`


