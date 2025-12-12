# SubscriptionGeneratorCommand.php

**Path**: `src\Subscription\Command\SubscriptionGeneratorCommand.php`

## Summary
This Symfony console command (`upd:subscription:generate`) provides a manual way to force-generate a subscription from an existing order by its token value. It retrieves an order from the database using the provided token argument and dispatches a `CreateSubscription` command synchronously via the message bus, primarily serving as an administrative tool for subscription generation troubleshooting or recovery scenarios.

## Classes
- `SubscriptionGeneratorCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

