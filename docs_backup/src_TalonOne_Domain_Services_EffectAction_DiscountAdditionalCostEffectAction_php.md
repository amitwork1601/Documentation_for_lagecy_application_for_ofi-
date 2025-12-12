# DiscountAdditionalCostEffectAction.php

**Path**: `src\TalonOne\Domain\Services\EffectAction\DiscountAdditionalCostEffectAction.php`

## Summary
This class handles promotional discounts for additional order costs (shipping and payment fees) as part of TalonOne integration. It executes discount effects by identifying the appropriate adjustable entity (shipment for shipping fees, order for payment fees) and applying the discount through the `DiscountEffectApplicator`. The class implements the effect action pattern for the 'setDiscountPerAdditionalCost' promotion type and supports reverting applied adjustments.

## Classes
- `DiscountAdditionalCostEffectAction`

## Function Details

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, Effect $effect`

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject`

