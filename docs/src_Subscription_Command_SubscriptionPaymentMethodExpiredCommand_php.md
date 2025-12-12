# SubscriptionPaymentMethodExpiredCommand.php

**Path**: `src\Subscription\Command\SubscriptionPaymentMethodExpiredCommand.php`

## Summary
This Symfony console command identifies subscriptions with payment methods expiring in the current month and sends notification emails to subscribers. It queries the database for active subscriptions whose payment instruments have expiration dates matching the current month and year, then dispatches email commands via the message bus to alert users about their expiring payment methods.

## Classes
- `SubscriptionPaymentMethodExpiredCommand`

## Function Details

### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

### `getExpiredSubscriptionsInThisMonth`


