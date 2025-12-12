# CreateSubscriptionOrderFromSubscription.php

**Path**: `src\Api\Command\SubscriptionOrder\CreateSubscriptionOrderFromSubscription.php`

## Summary
This is a command class that represents an intent to create a subscription order from an existing subscription. It serves as a data transfer object (DTO) in a CQRS (Command Query Responsibility Segregation) pattern, encapsulating the subscription code parameter needed to generate a new order based on a subscription's details.

## Classes
- `CreateSubscriptionOrderFromSubscription`

## Function Details

### `__construct`

- **Parameters**: `public string $subscriptionCode`

