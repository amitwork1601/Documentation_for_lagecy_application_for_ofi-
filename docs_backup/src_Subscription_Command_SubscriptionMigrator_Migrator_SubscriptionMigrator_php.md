# SubscriptionMigrator.php

**Path**: `src\Subscription\Command\SubscriptionMigrator\Migrator\SubscriptionMigrator.php`

## Summary
The `SubscriptionMigrator` class handles the migration of legacy subscription data from an old system/schema to a new subscription structure. It iterates through old subscription records (as DTOs), converts them using `OldSubscriptionConverter`, truncates existing subscription tables, and populates new subscription entities including subscription items and comments while temporarily disabling audit logging during the migration process.

## Classes
- `SubscriptionMigrator`

## Function Details

### `migrate`

- **Parameters**: `SymfonyStyle $io`
- **Description**: @throws \Exception
/

### `iterate`

- **Description**: @throws \Exception
/

### `count`

- **Description**: @throws Exception
/

### `saveToSubscription`

- **Parameters**: `OldSubscriptionDto $subscriptionDTO`
- **Description**: @throws Exception
/

### `createPaymentInstrument`

- **Parameters**: `OldSubscriptionDto $subscriptionDTO`
- **Description**: @throws Exception
/

### `saveToSubscriptionComment`

- **Parameters**: `OldSubscriptionDto $subscriptionDTO`
- **Description**: @throws Exception
/

### `truncateSubscriptionTables`

- **Description**: @throws Exception
/

### `resolveOldState`

- **Parameters**: `string $state`

