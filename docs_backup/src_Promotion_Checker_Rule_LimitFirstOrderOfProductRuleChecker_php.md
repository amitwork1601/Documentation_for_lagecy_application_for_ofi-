# LimitFirstOrderOfProductRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\LimitFirstOrderOfProductRuleChecker.php`

## Summary
This class implements a promotion rule checker that validates whether a customer is eligible for a first-time product purchase promotion. It examines order items to determine if the customer has previously ordered specific products (identified by product codes), checking the order repository to ensure this is their first order containing those products, thereby restricting promotional offers to genuine first-time purchasers.

## Classes
- `LimitFirstOrderOfProductRuleChecker`

## Function Details

### `__construct`

- **Parameters**: `OrderRepository $orderRepository`

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`

