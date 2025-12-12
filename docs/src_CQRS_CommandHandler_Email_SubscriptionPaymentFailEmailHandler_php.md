# SubscriptionPaymentFailEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\SubscriptionPaymentFailEmailHandler.php`

## Summary
This command handler processes subscription payment failure notifications by sending transactional emails to customers. When a subscription payment fails, it retrieves the associated order, customer, and subscription details from the repository, then uses the TransactionalEmailService to send a "subscription_payment_fail" email template with the customer's information and subscription details.

## Classes
- `SubscriptionPaymentFailEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SubscriptionPaymentFailEmailNotification $message`

### `getHandledMessages`


