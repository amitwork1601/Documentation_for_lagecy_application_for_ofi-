# CreatePromotionForCartHandler.php

**Path**: `src\Api\CommandHandler\Cart\CreatePromotionForCartHandler.php`

## Summary
This handler processes the creation and application of custom promotions to a shopping cart in an e-commerce system. It retrieves a cart by token, validates required entities (cart, channel, customer), creates a new promotion using provided options, generates a coupon code for that promotion, and assigns it to the order. The handler serves as part of a command-based architecture for managing dynamic promotional offers on specific customer orders.

## Classes
- `CreatePromotionForCartHandler`

## Function Details

### `__invoke`

- **Parameters**: `CreatePromotionForCart $command`

### `convertSnakeCase`

- **Parameters**: `array $promotion`

