# ShipmentEmailManager.php

**Path**: `src\EmailManager\ShipmentEmailManager.php`

## Summary
This class implements Sylius's shipment email management interface to handle shipment confirmation notifications using a CQRS pattern. It dispatches a `ShipmentShippedEmailNotification` command to a message bus when a shipment confirmation email needs to be sent, decoupling the email sending logic from the main application flow. The resend functionality is currently not implemented.

## Classes
- `ShipmentEmailManager`

## Function Details

### `__construct`

- **Parameters**: `private MessageBusInterface $bus`

### `sendConfirmationEmail`

- **Parameters**: `ShipmentInterface $shipment`

### `resendConfirmationEmail`

- **Parameters**: `ShipmentInterface $shipment`

