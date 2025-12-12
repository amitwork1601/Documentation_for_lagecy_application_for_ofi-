# CustomerProfileImportCommand.php

**Path**: `src\TalonOne\Command\OneShot\CustomerProfileImportCommand.php`

## Summary
This Symfony console command synchronizes customer profile data from a Sylius e-commerce system to TalonOne (a promotion/loyalty platform). It can either update a single customer profile when provided with a specific email address, or batch-process all customer profiles in groups of 10, using the TalonOne API to create or update customer records for marketing and promotion purposes.

## Classes
- `CustomerProfileImportCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

### `fetchCustomersAndCallApiRecursivly`

- **Parameters**: `SymfonyStyle $io, int $offset = 0`

### `getCustomers`

- **Parameters**: `int $offset`

