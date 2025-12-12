# SubscriptionMonitoringFixture.php

**Path**: `src\Fixture\SubscriptionMonitoringFixture.php`

## Summary
This fixture class creates test/seed data for subscription monitoring by generating 156 `SubscriptionMonitoring` entities, each representing consecutive days with a maximum threshold of 1000. It's used during development or testing to populate the database with sample subscription monitoring records that track daily subscription limits or quotas over a ~5 month period.

## Classes
- `SubscriptionMonitoringFixture`

## Function Details

### `__construct`

- **Parameters**: `private EntityManagerInterface $entityManager`

### `getName`


### `load`

- **Parameters**: `array $options`

