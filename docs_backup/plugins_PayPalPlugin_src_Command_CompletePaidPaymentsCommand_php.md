# CompletePaidPaymentsCommand.php

**Path**: `plugins\PayPalPlugin\src\Command\CompletePaidPaymentsCommand.php`

## Summary
This Symfony console command automatically completes PayPal payments that have been marked as paid in PayPal's system but not yet updated in Sylius. It queries for payments in "processing" state, verifies their completion status via PayPal's API, and transitions them to "completed" state using a state machine, ensuring payment synchronization between PayPal and the e-commerce platform.

## Classes
- `CompletePaidPaymentsCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

