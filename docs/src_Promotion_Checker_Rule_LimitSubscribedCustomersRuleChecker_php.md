# LimitSubscribedCustomersRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\LimitSubscribedCustomersRuleChecker.php`

## Summary
This class implements a promotion rule checker that restricts promotional offers to customers with active subscriptions. It validates whether an order's customer has an active subscription by checking the customer entity associated with the order, returning true only if a customer exists and has an active subscription, effectively allowing promotions to be limited to subscribed customers only.

## Classes
- `LimitSubscribedCustomersRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`

