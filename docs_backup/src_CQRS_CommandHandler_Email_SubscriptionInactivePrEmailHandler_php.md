# SubscriptionInactivePrEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\SubscriptionInactivePrEmailHandler.php`

## Summary
This command handler processes notifications for inactive subscription purchase requisitions by sending transactional emails to customers. It retrieves subscription order details, formats product information including pricing and variants with localization support, and uses the TransactionalEmailService to notify customers about their inactive subscription status. The handler validates that both the subscription and customer exist before preparing and sending the email with detailed order item information.

## Classes
- `SubscriptionInactivePrEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SubscriptionInactivePrEmailNotification $message`

