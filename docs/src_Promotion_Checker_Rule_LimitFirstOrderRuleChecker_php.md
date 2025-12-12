# LimitFirstOrderRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\LimitFirstOrderRuleChecker.php`

## Summary
This class implements a promotional rule checker that restricts promotions to first-time purchases of specific product variants. It verifies that a customer has not previously ordered any of the configured product variants by checking the order history, returning true only if the customer either has no previous orders containing those variants or is a guest customer (no customer record).

## Classes
- `LimitFirstOrderRuleChecker`

## Function Details

### `__construct`

- **Parameters**: `OrderRepository $orderRepository`

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`

