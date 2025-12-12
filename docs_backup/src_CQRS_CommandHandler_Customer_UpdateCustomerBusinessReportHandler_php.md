# UpdateCustomerBusinessReportHandler.php

**Path**: `src\CQRS\CommandHandler\Customer\UpdateCustomerBusinessReportHandler.php`

## Summary
This command handler updates a customer's business report by first retrieving the customer via query bus, then either fetching their existing business report or creating a new one if it doesn't exist. The handler delegates the actual update logic to a `CustomerBusinessReportUpdater` service, which applies specific updaters identified by name from the command, making it part of a CQRS pattern for managing customer business analytics or metrics.

## Classes
- `UpdateCustomerBusinessReportHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdateCustomerBusinessReport $command`

### `getCustomerBusinessReport`

- **Parameters**: `Customer $customer`

