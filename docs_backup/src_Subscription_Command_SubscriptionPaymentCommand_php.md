# SubscriptionPaymentCommand.php

**Path**: `src\Subscription\Command\SubscriptionPaymentCommand.php`

## Summary
This Symfony console command processes subscription payments by finding subscriptions that are due for payment and creating/managing their associated subscription orders. It handles the business logic of recurring subscription billing, including holiday date considerations, order state transitions, and payment processing through message dispatching, while using locks to prevent concurrent execution conflicts.

## Classes
- `SubscriptionPaymentCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`
- **Description**: @throws NonUniqueResultException
/

### `executeWithSubscriptionOption`

- **Parameters**: `InputInterface $input, OutputInterface $output`
- **Description**: @throws NonUniqueResultException
/

### `executeWithSubscriptionOrderOption`

- **Parameters**: `InputInterface $input, OutputInterface $output`

### `executeWithRunOption`

- **Parameters**: `\DateTime $shippingDate, OutputInterface $output, bool $dryRun`

### `executeWithRetryOption`

- **Parameters**: `OutputInterface $output`

### `lockAndDispatch`

- **Parameters**: `SubscriptionOrder $subscriptionOrder, OutputInterface $output`

