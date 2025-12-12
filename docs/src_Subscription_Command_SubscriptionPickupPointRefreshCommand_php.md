# SubscriptionPickupPointRefreshCommand.php

**Path**: `src\Subscription\Command\SubscriptionPickupPointRefreshCommand.php`

## Summary
This Symfony console command identifies subscriptions scheduled for processing today that have pickup points and triggers an update of their order state. It queries for upcoming subscriptions, filters those with draft orders containing pickup points, and dispatches a command to update their state, likely to handle cases where pickup points have been disabled or changed.

## Classes
- `SubscriptionPickupPointRefreshCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

