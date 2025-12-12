# MigrateOrderItemFrequencyToIntervalCommand.php

**Path**: `src\Console\Command\Fix\MigrateOrderItemFrequencyToIntervalCommand.php`

## Summary
This Symfony console command migrates OrderItem entities from an old schema using a "frequency" field to a new schema using an "interval" field. It maps 10 predefined frequency values (1-10) to their corresponding interval values (ranging from 21 to 155 days) for subscription-based order items, while disabling audit logging during the migration to improve performance.

## Classes
- `MigrateOrderItemFrequencyToIntervalCommand`

## Function Details

### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`
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

### `updateOrderItem`

- **Parameters**: `array $data`
- **Description**: @throws Exception
/

