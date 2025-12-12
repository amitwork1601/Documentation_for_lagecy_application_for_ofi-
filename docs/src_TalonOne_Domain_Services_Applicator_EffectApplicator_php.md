# EffectApplicator.php

**Path**: `src\TalonOne\Domain\Services\Applicator\EffectApplicator.php`

## Summary
The `EffectApplicator` class serves as a coordinator for applying and reverting promotional effects from TalonOne (a promotion engine) to Sylius commerce subjects. It iterates through registered effect action handlers to execute specific effect types (like discounts or rewards) on promotion subjects, and provides functionality to revert all applied effects when needed. This acts as a centralized orchestrator that delegates effect processing to specialized action handlers based on effect type.

## Classes
- `EffectApplicator`

## Function Details

### `apply`

- **Parameters**: `PromotionSubjectInterface $subject, Effect $effect`

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject`

### `getEffectActions`

- **Parameters**: `string $effectName`

