# SubscriptionCreationEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\SubscriptionCreationEmailHandler.php`

## Summary
This handler processes subscription creation email notifications by retrieving a subscription entity, transforming it into email parameters, and sending a transactional email to the customer. It serves as a CQRS command handler that orchestrates the email sending workflow when a new subscription is created, including validation that the subscription exists and email parameters are properly generated before dispatching the email through the transactional email service.

## Classes
- `SubscriptionCreationEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SubscriptionCreationEmailNotification $message`

