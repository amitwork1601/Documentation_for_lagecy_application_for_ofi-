# OrderRuleRepository.php

**Path**: `src\Repository\Order\OrderRuleRepository.php`

## Summary
The `OrderRuleRepository` is a data access layer for retrieving order rules from the database. Its main functionality is to fetch only enabled order rules that are associated with a specific sales channel, filtering by both the enabled status and channel membership to ensure rules are applied correctly within their designated context.

## Classes
- `OrderRuleRepository`

## Function Details

### `findEnabledForChannel`

- **Parameters**: `ChannelInterface $channel`

