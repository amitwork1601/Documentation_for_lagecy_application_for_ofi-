# LimitNonSubscribedCustomersRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\LimitNonSubscribedCustomersRuleChecker.php`

## Summary
This class implements a Sylius promotion rule checker that restricts promotional offers to non-subscribed customers only. It validates whether an order is eligible for a promotion by checking if the customer either doesn't exist or lacks an active subscription, effectively excluding subscribed customers from certain promotional campaigns.

## Classes
- `LimitNonSubscribedCustomersRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`

