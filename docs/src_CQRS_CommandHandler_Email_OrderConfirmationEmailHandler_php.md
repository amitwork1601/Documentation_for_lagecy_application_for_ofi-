# OrderConfirmationEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\OrderConfirmationEmailHandler.php`

## Summary
This handler processes order confirmation email notifications in a CQRS/messaging architecture. It retrieves order details either from the provided message parameters or by fetching the order from the repository by order number, then sends a transactional order confirmation email to the customer using the transformed order data including customer information and channel-specific details.

## Classes
- `OrderConfirmationEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `OrderConfirmationEmailNotification $message`

