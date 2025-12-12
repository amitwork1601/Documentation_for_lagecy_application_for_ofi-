# EffectActionHelperTrait.php

**Path**: `src\TalonOne\Domain\Services\EffectAction\EffectActionHelperTrait.php`

## Summary
This trait provides helper methods for managing Sylius order adjustments related to TalonOne promotion effects. It enables filtering adjustments by effect name and safely removing them from adjustable entities (like orders or order items), supporting the integration between TalonOne's promotional engine and Sylius's pricing adjustment system.

## Function Details

### `getAdjustmentsToRemove`

- **Parameters**: `AdjustableInterface $adjustable, string $effectName`

### `removeAdjustments`

- **Parameters**: `array $adjustmentsToRemove`
- **Description**: @param array&lt;AdjustmentInterfaceAlias&gt; $adjustmentsToRemove
/

