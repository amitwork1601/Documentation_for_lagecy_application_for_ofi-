# SendOrderConfirmation.php

**Path**: `src\CQRS\Command\Email\SendOrderConfirmation.php`

## Summary
This is a CQRS command class that represents an instruction to send an order confirmation email. It encapsulates the order token identifier needed to retrieve order details and trigger the email sending process, following the command pattern where it acts as a data transfer object between the application layer and the email service handler.

## Classes
- `SendOrderConfirmation`

## Function Details

### `__construct`

- **Parameters**: `string $orderToken`

### `orderToken`


