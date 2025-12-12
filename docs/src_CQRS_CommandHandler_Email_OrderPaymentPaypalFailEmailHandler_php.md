# OrderPaymentPaypalFailEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\OrderPaymentPaypalFailEmailHandler.php`

## Summary
This command handler processes failed PayPal payment notifications by sending a transactional email to customers whose orders experienced payment failures. It retrieves the order by number, extracts customer details (name, email) and order token, then triggers an 'order_payment_fail_paypal' email through the transactional email service to notify the customer and potentially allow them to retry the payment.

## Classes
- `OrderPaymentPaypalFailEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `OrderPaymentPaypalFailEmailNotification $message`

### `getHandledMessages`


