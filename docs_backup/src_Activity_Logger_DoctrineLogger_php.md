# DoctrineLogger.php

**Path**: `src\Activity\Logger\DoctrineLogger.php`

## Summary
The `DoctrineLogger` class implements activity logging for Doctrine entities by recording activities after entity insertion. It uses a deferred provider to ensure activities are logged only after their associated entities have been persisted and assigned IDs, cloning the activity template and attaching entity type and identifier metadata before persisting the activity record to the database.

## Classes
- `DoctrineLogger`

## Function Details

### `registerActivity`

- **Parameters**: `?callable $activityBuilder, ResourceInterface ...$attachTo`

### `doRegisterActivity`

- **Parameters**: `Activity $activity, ResourceInterface $entity`

