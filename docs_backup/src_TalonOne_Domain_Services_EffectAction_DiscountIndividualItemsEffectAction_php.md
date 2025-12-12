# DiscountIndividualItemsEffectAction.php

**Path**: `src\TalonOne\Domain\Services\EffectAction\DiscountIndividualItemsEffectAction.php`

## Summary
This class implements a Talon.One promotion effect action that applies item-level discounts to individual items in an order. It executes the "setDiscountPerItem" effect by delegating to a `DiscountEffectApplicator` to apply discounts, and provides a revert operation that removes all discount adjustments from order items and their units when the promotion needs to be rolled back.

## Classes
- `DiscountIndividualItemsEffectAction`

## Function Details

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, Effect $effect`

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject`

