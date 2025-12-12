# ItemTotalMaxRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\ItemTotalMaxRuleChecker.php`

## Summary
This class implements a promotion rule checker that determines if an order qualifies for a promotion based on a maximum item total threshold. It verifies that the order's promotion subject total is strictly less than a configured maximum amount for the order's specific channel, returning false if the channel configuration doesn't exist or if the total exceeds the limit.

## Classes
- `ItemTotalMaxRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`
- **Description**: @throws UnsupportedTypeException
/

