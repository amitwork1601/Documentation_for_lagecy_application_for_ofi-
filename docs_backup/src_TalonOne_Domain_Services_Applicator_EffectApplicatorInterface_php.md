# EffectApplicatorInterface.php

**Path**: `src\TalonOne\Domain\Services\Applicator\EffectApplicatorInterface.php`

## Summary
This interface defines a contract for applying and reverting TalonOne promotion effects to Sylius promotion subjects (like orders or carts). It serves as an abstraction layer for integrating TalonOne's promotion engine effects with Sylius e-commerce framework, enabling different types of promotional effects (discounts, rewards, etc.) to be applied to and removed from commerce entities in a standardized way.

## Function Details

### `apply`

- **Parameters**: `PromotionSubjectInterface $subject, Effect $effect`

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject`

