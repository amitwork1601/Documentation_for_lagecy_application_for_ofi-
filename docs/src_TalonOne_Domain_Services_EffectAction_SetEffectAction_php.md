# SetEffectAction.php

**Path**: `src\TalonOne\Domain\Services\EffectAction\SetEffectAction.php`

## Summary
This class implements a TalonOne promotion effect action that handles "set" effects for e-commerce orders. Specifically, it processes shipping-related promotions by setting a free shipping threshold on the order's shipment when the effect targets the `Session.Attributes.ShippingMethodReducedFeesThreshold` path, converting the threshold value from the promotion system to the application's internal currency representation (multiplying by 100 for cents).

## Classes
- `SetEffectAction`

## Function Details

### `execute`

- **Parameters**: `PromotionSubjectInterface $subject, Effect $effect`
- **Description**: @var Order */

### `revert`

- **Parameters**: `PromotionSubjectInterface $subject`

