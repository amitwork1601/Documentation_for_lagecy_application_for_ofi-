# UnitFixedDiscountPromotionActionCommand.php

**Path**: `src\Promotion\Action\UnitFixedDiscountPromotionActionCommand.php`

## Summary
This class implements a unit-level fixed discount promotion action for an e-commerce order system. It extends Sylius's base discount functionality to apply fixed-amount discounts to individual order items (units) while supporting advanced filtering capabilities including price ranges, taxons (categories), product types (subscribable/non-subscribable), variants, and exclusion rules. The class orchestrates multiple filters to determine which order items are eligible for the discount before applying the promotion adjustment.

## Classes
- `UnitFixedDiscountPromotionActionCommand`

## Function Details

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration, PromotionInterface $promotion`

### `setUnitsAdjustments`

- **Parameters**: `OrderItemInterface $item, int $amount, PromotionInterface $promotion, ?int $limit = null`

