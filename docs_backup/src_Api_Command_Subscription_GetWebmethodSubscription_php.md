# GetWebmethodSubscription.php

**Path**: `src\Api\Command\Subscription\GetWebmethodSubscription.php`

## Summary
This is a command class that represents a request to retrieve a Webmethod subscription by its subscription code. It serves as a data transfer object (DTO) in a command-based architecture, likely used with CQRS pattern, to encapsulate the input parameter needed for querying subscription details. The `SubscriptionCodeAware` attribute suggests it participates in subscription code validation or processing middleware.

## Classes
- `GetWebmethodSubscription`

## Function Details

### `__construct`

- **Parameters**: `public string $subscriptionCode`

