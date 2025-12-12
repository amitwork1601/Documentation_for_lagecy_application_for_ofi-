# SubscriptionItemMigrator.php

**Path**: `src\Subscription\Command\SubscriptionMigrator\Migrator\SubscriptionItemMigrator.php`

## Summary
The `SubscriptionItemMigrator` class is responsible for migrating legacy subscription item data from an old database schema to the new `SubscriptionItem` entity format. It iterates through old subscription item records, converts them using `OldSubscriptionConverter`, and persists them to the database while temporarily disabling audit logging for performance. The migrator provides console progress feedback during the migration process and handles errors gracefully by logging issues with individual records without stopping the entire migration.

## Classes
- `SubscriptionItemMigrator`

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

### `saveToSubscriptionItem`

- **Parameters**: `OldSubscriptionItemDto $subscriptionItemDto`
- **Description**: @throws Exception
/

