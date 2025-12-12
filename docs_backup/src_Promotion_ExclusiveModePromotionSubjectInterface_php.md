# ExclusiveModePromotionSubjectInterface.php

**Path**: `src\Promotion\ExclusiveModePromotionSubjectInterface.php`

## Summary
This interface extends Sylius's `PromotionSubjectInterface` to add support for exclusive promotion modes. It defines a contract for entities that need to count applied promotions filtered by exclusivity level and optional priority, enabling the system to enforce business rules around mutually exclusive promotional offers (e.g., preventing "stackable" promotions from being combined with "exclusive" ones).

## Function Details

### `countPromotionByExclusiveMode`

- **Parameters**: `int $exclusiveMode, int $priority = -1`

