# CustomerBusinessReportUpdater.php

**Path**: `src\TalonOne\Updater\CustomerBusinessReportUpdater.php`

## Summary
This class serves as a coordinator for updating `CustomerBusinessReport` entities by orchestrating multiple updater services. It uses Symfony's dependency injection to collect all services tagged with `CustomerBusinessReportUpdaterInterface::TAG`, sorts them by priority, and executes them sequentially to update the business report, with optional filtering to run only specific named updaters.

## Classes
- `CustomerBusinessReportUpdater`

## Function Details

### `update`

- **Parameters**: `CustomerBusinessReport $customerBusinessReport, ?array $updatersName = null`
- **Description**: @throws \Exception
/

### `getUpdaters`

- **Parameters**: `?array $names = null`
- **Description**: @throws \Exception
/

