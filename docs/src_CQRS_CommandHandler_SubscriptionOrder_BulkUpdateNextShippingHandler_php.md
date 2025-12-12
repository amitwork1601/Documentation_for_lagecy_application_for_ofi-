# BulkUpdateNextShippingHandler.php

**Path**: `src\CQRS\CommandHandler\SubscriptionOrder\BulkUpdateNextShippingHandler.php`

## Summary
This command handler processes bulk updates to the next shipping date for subscription orders. It iterates through a list of subscription order tokens, retrieves the corresponding subscription for each order, and updates both the `nextShippingAt` and `nextShippingAtReference` fields with a new date, attributing the change to the subscription manager role. This enables administrators to reschedule multiple subscription deliveries simultaneously through a single command.

## Classes
- `BulkUpdateNextShippingHandler`

## Function Details

### `__invoke`

- **Parameters**: `BulkUpdateNextShipping $command`

