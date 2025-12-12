# SendSubscriptionNextShippingEmailHandler.php

**Path**: `src\CQRS\CommandHandler\Email\SendSubscriptionNextShippingEmailHandler.php`

## Summary
This command handler sends subscription-related shipping notification emails to customers. It retrieves a subscription by ID, prepares email parameters using the subscription data (customer info, channel, etc.), and sends a transactional email through the email service with configurable recipient override support. The handler is part of a CQRS architecture for managing subscription communication workflows.

## Classes
- `SendSubscriptionNextShippingEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `SendSubscriptionNextShippingEmail $command`

