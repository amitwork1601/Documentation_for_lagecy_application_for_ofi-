# SubscriptionMonitoringRepository.php

**Path**: `src\Repository\Subscription\SubscriptionMonitoringRepository.php`

## Summary
The `SubscriptionMonitoringRepository` is a Doctrine ORM repository that provides query methods for retrieving subscription monitoring data filtered by date ranges. It offers functionality to find monitoring records within a specified date range (`findAllByRange`) and to locate a specific monitoring record by an exact calendar date (`findByDate`), supporting subscription analytics and tracking over time.

## Classes
- `SubscriptionMonitoringRepository`

## Function Details

### `findAllByRange`

- **Parameters**: `?\DateTime $minDate, ?\DateTime $maxDate`
- **Description**: @return float|int|mixed|string
/

### `findByDate`

- **Parameters**: `\DateTime $date`
- **Description**: @throws NonUniqueResultException
/

