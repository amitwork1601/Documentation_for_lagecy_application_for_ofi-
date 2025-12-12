# UpdateShippingSubscriptionHandler.php

**Path**: `src\Api\CommandHandler\Subscription\UpdateShippingSubscriptionHandler.php`

## Summary
This command handler processes updates to shipping information for active subscriptions in an e-commerce system. It retrieves a subscription by code, creates an update DTO with new shipping details, and applies those changes to the subscription's orders, with different behavior based on whether the user is a shop customer (always spreads changes) or an admin (conditionally spreads changes based on a flag). The handler integrates with Sylius e-commerce framework and uses Symfony Messenger for command handling.

## Classes
- `UpdateShippingSubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdateShippingSubscription $command`

### `updateShippingSubscriptionOrder`

- **Parameters**: `Subscription $subscription, UpdateShippingDto $updateShippingDto`

