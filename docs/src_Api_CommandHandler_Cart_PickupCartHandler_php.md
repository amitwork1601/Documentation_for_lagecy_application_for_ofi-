# PickupCartHandler.php

**Path**: `src\Api\CommandHandler\Cart\PickupCartHandler.php`

## Summary
This is a command handler that creates and initializes new shopping carts in an e-commerce system. It processes the `PickupCart` command by retrieving the specified sales channel, creating a new order/cart instance, associating it with a customer (if provided), setting the appropriate channel, currency, and locale, then persisting it to the database with a unique token for subsequent cart operations.

## Classes
- `PickupCartHandler`

## Function Details

### `__invoke`

- **Parameters**: `PickupCart $pickupCart`

### `provideCart`

- **Parameters**: `ChannelInterface $channel, PickupCart $pickupCart`

### `provideCustomer`

- **Parameters**: `?string $customerIri`

