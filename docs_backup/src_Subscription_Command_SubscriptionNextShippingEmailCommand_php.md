# SubscriptionNextShippingEmailCommand.php

**Path**: `src\Subscription\Command\SubscriptionNextShippingEmailCommand.php`

## Summary
This Symfony console command sends automated email notifications to customers about their upcoming subscription shipments. It queries for active subscriptions with pending orders, then dispatches either "next shipping" reminder emails or "credit balance expired" emails through a message bus, with configurable timing options (immediate via `--soon` flag or scheduled execution via `--run` flag).

## Classes
- `SubscriptionNextShippingEmailCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

