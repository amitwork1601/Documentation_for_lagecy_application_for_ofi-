# SubscriptionMigratorCommand.php

**Path**: `src\Subscription\Command\SubscriptionMigratorCommand.php`

## Summary
This Symfony console command orchestrates the migration of subscription data from an old data model to a new one. It uses three specialized migrator services (SubscriptionMigrator, SubscriptionItemMigrator, and SubscriptionOrderMigrator) to handle the data transformation, includes locking to prevent concurrent executions, and validates that old MySQL subscription tables exist before proceeding with the migration process.

## Classes
- `SubscriptionMigratorCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`
- **Description**: @throws \Exception
/

### `canBeMigrated`

- **Description**: @throws \Doctrine\DBAL\Exception
/

### `runSubscriptionOrderItemUpdater`

- **Parameters**: `OutputInterface $output`

