# GetWebmethodSubscriptionHandler.php

**Path**: `src\Api\CommandHandler\Subscription\GetWebmethodSubscriptionHandler.php`

## Summary
This handler retrieves a Subscription entity from the database based on a subscription code provided in the GetWebmethodSubscription command. It serves as a message handler in Symfony's messenger component, fetching subscription data specifically for webmethod-related operations and throwing an assertion error if the subscription is not found. The handler acts as a simple query layer to ensure a valid subscription exists before proceeding with webmethod subscription processing.

## Classes
- `GetWebmethodSubscriptionHandler`

## Function Details

### `__construct`

- **Parameters**: `private SubscriptionRepository $subscriptionRepository`

### `__invoke`

- **Parameters**: `GetWebmethodSubscription $debitSubscription`

