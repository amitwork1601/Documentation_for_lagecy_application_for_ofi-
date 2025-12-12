# EffectActionInterface.php

**Path**: `src\TalonOne\Domain\Services\EffectAction\EffectActionInterface.php`

## Summary
This interface defines the contract for handling TalonOne promotion effects within a Sylius e-commerce integration. It requires implementing classes to execute promotion effects (like discounts or rewards) on promotion subjects (typically orders or carts) and provides a mechanism to revert those effects, enabling the application to apply and rollback TalonOne campaign rules dynamically.

## Function Details

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, Effect $effect`

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject`

