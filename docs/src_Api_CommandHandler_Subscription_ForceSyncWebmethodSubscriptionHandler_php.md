# ForceSyncWebmethodSubscriptionHandler.php

**Path**: `src\Api\CommandHandler\Subscription\ForceSyncWebmethodSubscriptionHandler.php`

## Summary
This command handler forces a synchronization of a subscription with an enterprise bus system (Webmethod). It retrieves a subscription entity by its code and explicitly triggers a notification to the enterprise bus, likely used for manual resynchronization when subscriptions fall out of sync or need to be republished to external systems.

## Classes
- `ForceSyncWebmethodSubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `ForceSyncWebmethodSubscription $command`

