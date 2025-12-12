# SubscriptionOrderMigrator.php

**Path**: `src\Subscription\Command\SubscriptionMigrator\Migrator\SubscriptionOrderMigrator.php`

## Summary
This class migrates subscription order data in a database, specifically handling the conversion or update of `SubscriptionOrder` entities. It processes orders in batches with progress tracking, temporarily disables auditing during migration to improve performance, and updates subscription order records while handling any database exceptions that occur during the process.

## Classes
- `SubscriptionOrderMigrator`

## Function Details

### `migrate`

- **Parameters**: `SymfonyStyle $io`
- **Description**: @throws Exception
/

### `iterate`

- **Description**: @throws Exception
/

### `count`

- **Description**: @throws Exception
/

### `getQuery`

- **Parameters**: `array $columns`

### `updateSubscriptionOrder`

- **Parameters**: `array $data`
- **Description**: @throws Exception
/

### `checkoutStateResolver`

- **Parameters**: `string $oldCheckoutState`

### `draftStateResolver`

- **Parameters**: `string $oldOrderState, string $subscriptionState`

### `stateResolver`

- **Parameters**: `string $oldOrderState, string $subscriptionState`

