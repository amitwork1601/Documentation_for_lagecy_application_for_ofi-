# CustomerBusinessReportCommand.php

**Path**: `src\TalonOne\Command\CustomerBusinessReportCommand.php`

## Summary
This Symfony console command updates or creates customer business reports for TalonOne integration, either for a specific customer or all customers in batch. It processes customer data to generate/update business reports using the `CustomerBusinessReportUpdater`, with support for batch processing, progress tracking, and the ability to disable auditing during execution for performance optimization.

## Classes
- `CustomerBusinessReportCommand`

## Function Details

### `configure`


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

### `updateCustomerBusinessReport`

- **Parameters**: `Customer $customer`

### `getCustomerBusinessReport`

- **Parameters**: `Customer $customer`

