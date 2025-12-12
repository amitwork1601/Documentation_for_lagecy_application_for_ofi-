# CancelSubscriptionOrderHandler.php

**Path**: `src\Api\CommandHandler\SubscriptionOrder\CancelSubscriptionOrderHandler.php`

## Summary
This command handler processes subscription order cancellation requests in an e-commerce/subscription management system. It retrieves a subscription order by its token value, validates its existence, and applies a cancellation state transition using a dedicated transition applicator service. The handler serves as part of a CQRS-style command/handler pattern for managing the subscription order lifecycle, specifically handling the business logic for moving orders into a cancelled state.

## Classes
- `CancelSubscriptionOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `CancelSubscriptionOrder $command`

