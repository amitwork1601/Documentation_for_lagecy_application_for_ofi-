# DebitSubscription.php

**Path**: `src\Api\Command\Subscription\DebitSubscription.php`

## Summary
This class represents a command for debiting a subscription in a subscription management system. It serves as a data transfer object (DTO) that carries a subscription code identifier, likely used in a CQRS (Command Query Responsibility Segregation) pattern to initiate a debit operation against a specific subscription. The `SubscriptionCodeAware` attribute suggests this command participates in validation or processing logic that requires subscription code verification.

## Classes
- `DebitSubscription`

## Function Details

### `__construct`

- **Parameters**: `public string $subscriptionCode`

