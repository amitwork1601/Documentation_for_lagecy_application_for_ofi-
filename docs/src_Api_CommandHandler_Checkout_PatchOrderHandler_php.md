# PatchOrderHandler.php

**Path**: `src\Api\CommandHandler\Checkout\PatchOrderHandler.php`

## Summary
This handler processes PATCH requests for orders during checkout by updating tracking and analytics metadata on an order entity. It retrieves an order by token, validates its state, and if the order is still being processed (not new/fulfilled), it updates fields like customer IP, Google Click ID (gclid), Google session ID, user agent, and consent storage settings for ad/analytics tracking. The handler uses order locking to prevent concurrent modifications during the update operation.

## Classes
- `PatchOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `PatchOrder $patchOrder`

