# SubscriptionTerminationEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\SubscriptionTerminationEmailHandler.php`

## Summary
This command handler processes subscription termination email notifications by retrieving subscription details and sending a transactional email to the customer. When invoked, it fetches the subscription via a query bus, extracts customer information (name, email, channel), and uses the TransactionalEmailService to send a "subscription_termination" email template with the customer's details and appropriate sender configuration.

## Classes
- `SubscriptionTerminationEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SubscriptionTerminationEmailNotification $message`

