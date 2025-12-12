# SubscriptionOrderItemUpdaterCommand.php

**Path**: `src\Subscription\Command\SubscriptionOrderItemUpdaterCommand.php`

## Summary
This Symfony console command updates the unit prices of order items associated with subscription orders, applying subscription-based price reductions. It processes subscription orders in batches (500 at a time), recalculates product variant prices using a configured percentage reduction for subscriptions, and updates the order items accordingly while managing audit logging and database transactions.

## Classes
- `SubscriptionOrderItemUpdaterCommand`

## Function Details

### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

