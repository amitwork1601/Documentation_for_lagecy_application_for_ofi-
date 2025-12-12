# AddFreeItemEffectAction.php

**Path**: `src\TalonOne\Domain\Services\EffectAction\AddFreeItemEffectAction.php`

## Summary
This class handles the "add free item" promotion effect in a Talon.One integration for an e-commerce system. It processes promotional effects that add free product items to orders by looking up the product variant by SKU and applying an order adjustment, with support for coupon-triggered promotions. The code appears to be part of a Sylius-based e-commerce platform's promotion system that integrates with Talon.One's campaign management service.

## Classes
- `AddFreeItemEffectAction`

## Function Details

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, Effect $effect`

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject`

