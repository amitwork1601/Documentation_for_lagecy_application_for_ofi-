# ForceSyncWebmethodPromotion.php

**Path**: `src\Api\Command\Promotion\ForceSyncWebmethodPromotion.php`

## Summary
This class is a command object that triggers a forced synchronization of a promotion with a web-based payment method system. It uses Sylius's `PromotionCodeAware` attribute to indicate that this command operates on promotion codes, and encapsulates the promotion code identifier needed to perform the synchronization operation.

## Classes
- `ForceSyncWebmethodPromotion`

## Function Details

### `__construct`

- **Parameters**: `public string $promotionCode`

