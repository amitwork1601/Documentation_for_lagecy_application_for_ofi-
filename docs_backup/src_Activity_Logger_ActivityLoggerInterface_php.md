# ActivityLoggerInterface.php

**Path**: `src\Activity\Logger\ActivityLoggerInterface.php`

## Summary
This interface defines a contract for logging activities in a Sylius-based e-commerce application. It provides a single method to register activities by accepting an optional callable builder function and one or more Sylius resource entities to attach the activity to, enabling the tracking of domain events and actions associated with business entities.

## Function Details

### `registerActivity`

- **Parameters**: `?callable $activityBuilder, ResourceInterface ...$attachTo`

