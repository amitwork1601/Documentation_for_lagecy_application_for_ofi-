# OrderPaymentFailEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\OrderPaymentFailEmailHandler.php`

## Summary
This command handler processes payment failure notifications for orders by sending transactional emails to customers when their order payment fails. It retrieves the order by order number, extracts customer information, and uses the TransactionalEmailService to send a formatted "order_payment_fail" email containing the customer's name and order details through the appropriate channel.

## Classes
- `OrderPaymentFailEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `OrderPaymentFailEmailNotification $message`

### `getHandledMessages`


