# CustomerBusinessReportUpdaterInterface.php

**Path**: `src\TalonOne\Updater\CustomerBusinessReportUpdaterInterface.php`

## Summary
This interface defines a contract for updating CustomerBusinessReport entities in the TalonOne integration system. It establishes a tagged service pattern (using Symfony's AutoconfigureTag) that allows multiple implementations to be auto-registered and process business report updates with configurable priority. The interface serves as an extension point for different types of business report update logic related to TalonOne's loyalty/promotion platform integration.

## Function Details

### `update`

- **Parameters**: `CustomerBusinessReport $customerBusinessReport`

