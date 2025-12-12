# PromotionRepositoryInterface.php

**Path**: `src\Repository\PromotionRepositoryInterface.php`

## Summary
This interface extends Sylius's base promotion repository to define a contract for retrieving promotions from the database. It adds a custom method `findActiveForPromotionSubject()` that enables querying for active promotions applicable to a specific promotion subject (such as an order or product), allowing the application to determine which promotional rules should be evaluated for discounts or special offers.

## Function Details

### `findActiveForPromotionSubject`

- **Parameters**: `PromotionSubjectInterface $subject`

