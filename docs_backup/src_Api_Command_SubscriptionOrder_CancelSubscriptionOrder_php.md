# CancelSubscriptionOrder.php

**Path**: `src\Api\Command\SubscriptionOrder\CancelSubscriptionOrder.php`

## Summary
This class represents a command for canceling a subscription order in a Sylius-based e-commerce API. It serves as a data transfer object (DTO) that carries the order token value required to identify and cancel a specific subscription order, with the `OrderTokenValueAware` attribute enabling token-based authorization and the serialization group restricting its use to admin-level subscription order update operations.

## Classes
- `CancelSubscriptionOrder`

## Function Details

### `__construct`

- **Parameters**: `public string $orderTokenValue`

