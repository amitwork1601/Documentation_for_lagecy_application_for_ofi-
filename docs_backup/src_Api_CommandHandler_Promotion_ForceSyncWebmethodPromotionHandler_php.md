# ForceSyncWebmethodPromotionHandler.php

**Path**: `src\Api\CommandHandler\Promotion\ForceSyncWebmethodPromotionHandler.php`

## Summary
This command handler forces a synchronization of a promotion entity to an enterprise bus system. It retrieves a promotion by its code from the repository and uses the `PromotionToEnterpriseBusNotifier` to send the promotion data to the enterprise bus, enabling manual re-synchronization of promotion data when needed.

## Classes
- `ForceSyncWebmethodPromotionHandler`

## Function Details

### `__invoke`

- **Parameters**: `ForceSyncWebmethodPromotion $message`
- **Description**: @throws SMException
/

