# ForceSyncWebmethodSubscription.php

**Path**: `src\Api\Command\Subscription\ForceSyncWebmethodSubscription.php`

## Summary
This is a command class that triggers a forced synchronization of a subscription with a webmethod integration system. It serves as a data transfer object (DTO) in a CQRS pattern, carrying the subscription code identifier needed to perform the sync operation. The `SubscriptionCodeAware` attribute likely enables automatic validation or resolution of the subscription code through the application's infrastructure.

## Classes
- `ForceSyncWebmethodSubscription`

## Function Details

### `__construct`

- **Parameters**: `public string $subscriptionCode`

