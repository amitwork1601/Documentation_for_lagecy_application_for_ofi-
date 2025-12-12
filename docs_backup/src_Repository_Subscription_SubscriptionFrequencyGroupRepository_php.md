# SubscriptionFrequencyGroupRepository.php

**Path**: `src\Repository\Subscription\SubscriptionFrequencyGroupRepository.php`

## Summary
This repository manages `SubscriptionFrequencyGroup` entities and provides a specialized query method to retrieve the appropriate frequency group based on a given subscription interval. The `getFrequencyGroupByFrequency` method finds the matching frequency group by locating the group with the highest `minRange` value that is less than or equal to the provided interval, essentially implementing a range-based lookup for categorizing subscription frequencies.

## Classes
- `SubscriptionFrequencyGroupRepository`

## Function Details

### `getFrequencyGroupByFrequency`

- **Parameters**: `int $interval`
- **Description**: @throws NonUniqueResultException
/

