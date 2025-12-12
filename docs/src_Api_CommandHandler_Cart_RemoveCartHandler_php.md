# RemoveCartHandler.php

**Path**: `src\Api\CommandHandler\Cart\RemoveCartHandler.php`

## Summary
This handler processes cart removal commands in an e-commerce system. It locates a cart by token, clears its billing and shipping addresses, deletes it from the repository, and cancels any associated customer session in the TalonOne promotional system to ensure proper cleanup of related marketing/discount tracking data.

## Classes
- `RemoveCartHandler`

## Function Details

### `__invoke`

- **Parameters**: `RemoveCart $command`

