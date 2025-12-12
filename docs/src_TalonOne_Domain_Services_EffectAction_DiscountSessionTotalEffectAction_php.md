# DiscountSessionTotalEffectAction.php

**Path**: `src\TalonOne\Domain\Services\EffectAction\DiscountSessionTotalEffectAction.php`

## Summary
This class implements a Talon.One promotion effect action that applies session-wide discounts to orders in an e-commerce system. It handles both the execution of discount effects (by delegating to a `DiscountEffectApplicator`) and their reversion by removing associated adjustments. The class integrates Talon.One's promotional campaign system with Sylius's promotion framework, specifically managing the "setDiscount" effect type that applies discounts to the entire order total.

## Classes
- `DiscountSessionTotalEffectAction`

## Function Details

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, Effect $effect`

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject`

