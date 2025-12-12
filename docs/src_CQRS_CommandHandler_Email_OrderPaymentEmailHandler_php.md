# OrderPaymentEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\OrderPaymentEmailHandler.php`

## Summary
This command handler processes order payment email notifications by retrieving an order from the repository, validating the associated customer, and sending a transactional payment email with order and customer details. It serves as part of a CQRS messaging system to decouple email sending from the main order payment flow, ensuring customers receive payment-related notifications through the configured channel.

## Classes
- `OrderPaymentEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `OrderPaymentEmailNotification $message`

### `getHandledMessages`


