# OrderProviderSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\OrderProviderSpec.php`

## Summary
This is a PhpSpec specification file that tests an OrderProvider service for the Sylius PayPal plugin. The OrderProvider retrieves orders from the repository either by ID or by token value, throwing an OrderNotFoundException when the requested order doesn't exist. This functionality is essential for the PayPal payment integration to look up orders during payment processing workflows.

## Classes
- `OrderProviderSpec`

## Function Details

### `let`

- **Parameters**: `OrderRepositoryInterface $orderRepository`

### `it_is_an_order_provider`


