# RecoverMissingInvoiceCommand.php

**Path**: `src\Console\Command\Tools\RecoverMissingInvoiceCommand.php`

## Summary
This Symfony console command recovers missing invoice records for completed orders by searching for invoice PDF files in Google Cloud Storage. It iterates through orders that lack invoice references (starting from January 2024), constructs the expected file path based on the order number, and updates the order entity with the correct bill path if the invoice file is found in storage.

## Classes
- `RecoverMissingInvoiceCommand`

## Function Details

### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

