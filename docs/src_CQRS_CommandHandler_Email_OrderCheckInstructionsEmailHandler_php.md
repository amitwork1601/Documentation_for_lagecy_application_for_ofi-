# OrderCheckInstructionsEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\OrderCheckInstructionsEmailHandler.php`

## Summary
This handler processes email notifications for order check payment instructions. When invoked, it retrieves an order by its number, validates the associated customer and payment method, then prepares email parameters including order details, customer information, formatted monetary amounts, and checkout date to send a transactional email with payment instructions to the customer.

## Classes
- `OrderCheckInstructionsEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `OrderCheckInstructionsEmailNotification $message`

### `getHandledMessages`


