# RemovePromotion.php

**Path**: `src\Validator\Promotion\RemovePromotion.php`

## Summary
This is a custom Symfony validation constraint for the promotion domain that prevents deletion of promotions that are currently in use. It operates at the class level (CLASS_CONSTRAINT) and will trigger the error message "Cannot delete, promotion is in use" when the validation fails, ensuring referential integrity by blocking removal of active promotions.

## Classes
- `RemovePromotion`

## Function Details

### `getTargets`


