# OrderPaymentSuccessEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\OrderPaymentSuccessEmailHandler.php`

## Summary
This command handler processes successful order payment notifications by sending a transactional email to the customer. It retrieves the order by number, extracts customer and payment details, then uses the TransactionalEmailService to send an "order_payment_success" email with order information, customer name, and payment method details to the customer's email address through the appropriate channel.

## Classes
- `OrderPaymentSuccessEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `OrderPaymentSuccessEmailNotification $message`

### `getHandledMessages`


