# SendSubscriptionCBExpiredEmail.php

**Path**: `src\CQRS\Command\Email\SendSubscriptionCBExpiredEmail.php`

## Summary
This command class represents an asynchronous CQRS command for sending email notifications when a subscription's credit card (CB - Carte Bancaire) has expired. It extends the abstract subscription command pattern and encapsulates the subscription entity along with a configurable email type parameter, allowing the system to trigger different email templates for expired payment method notifications.

## Classes
- `SendSubscriptionCBExpiredEmail`

## Function Details

### `getEmailType`


