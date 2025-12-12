# SendSubscriptionCBExpiredEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\SendSubscriptionCBExpiredEmailHandler.php`

## Summary
This command handler sends a subscription credit card (CB - Carte Bancaire) expiration notification email to customers. It retrieves a subscription by ID, extracts customer information, and uses a transactional email service to send a formatted email with subscription-specific parameters through the appropriate channel, specifically handling the business case when a customer's payment method is about to expire.

## Classes
- `SendSubscriptionCBExpiredEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SendSubscriptionCBExpiredEmail $message`

