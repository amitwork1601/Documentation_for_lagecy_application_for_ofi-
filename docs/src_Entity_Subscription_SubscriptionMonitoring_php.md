# SubscriptionMonitoring.php

**Path**: `src\Entity\Subscription\SubscriptionMonitoring.php`

## Summary
The `SubscriptionMonitoring` entity tracks daily subscription metrics, specifically recording a maximum count value for each calendar date. It serves as a Doctrine ORM entity with GraphQL query support through ApiPlatform, likely used for monitoring subscription-related statistics or limits on a per-day basis with automatic timestamp tracking.

## Classes
- `SubscriptionMonitoring`

## Function Details

### `__construct`


### `getId`


### `getMax`


### `setMax`

- **Parameters**: `int $max`

### `getCalendarDate`


### `setCalendarDate`

- **Parameters**: `\DateTime $calendarDate`

