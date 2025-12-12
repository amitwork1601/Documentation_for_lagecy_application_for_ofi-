# IsDeletablePromotionChecker.php

**Path**: `src\Checker\IsDeletablePromotionChecker.php`

## Summary
This class determines whether a Promotion entity can be safely deleted from the system. It checks multiple business rules: the promotion must not have been used, must not have associated coupons, must not be assigned to a specific customer, and must not have any related orders in the database before allowing deletion.

## Classes
- `IsDeletablePromotionChecker`

## Function Details

### `__construct`

- **Parameters**: `private PromotionRepository $promotionRepository`

### `check`

- **Parameters**: `Promotion $promotion`

