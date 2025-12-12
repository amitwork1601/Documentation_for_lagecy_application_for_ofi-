# OrderConfirmationEmailNotification.php

**Path**: `src\CQRS\Command\Email\OrderConfirmationEmailNotification.php`

## Summary
This is a CQRS command class that represents a request to send an order confirmation email notification. It encapsulates the order number and optional email parameters (like recipient details, template variables, etc.) needed to generate and dispatch the confirmation email after an order is placed. This command object serves as a data transfer object (DTO) in the command bus pattern to trigger the email notification process in an asynchronous or decoupled manner.

## Classes
- `OrderConfirmationEmailNotification`

## Function Details

### `__construct`

- **Parameters**: `private string $orderNumber, private ?array $emailParams = null`

### `getOrderNumber`


### `getEmailParams`


