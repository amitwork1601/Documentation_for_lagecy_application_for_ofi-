# OrderProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\OrderProvider.php`

## Summary
The `OrderProvider` class is a service that retrieves Sylius orders from the database for the PayPal plugin, either by numeric ID or by token string. It acts as a wrapper around the order repository that enforces non-null return values by throwing `OrderNotFoundException` when an order cannot be found, ensuring safe order retrieval throughout the PayPal payment workflow.

## Classes
- `OrderProvider`

## Function Details

### `__construct`

- **Parameters**: `OrderRepositoryInterface $orderRepository`

### `provideOrderById`

- **Parameters**: `int $id`

### `provideOrderByToken`

- **Parameters**: `string $token`

