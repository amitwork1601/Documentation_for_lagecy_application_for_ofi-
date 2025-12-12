# LimitingOrderItemQuantityModifier.php

**Path**: `src\Order\Modifier\LimitingOrderItemQuantityModifier.php`

## Summary
This class is a decorator for Sylius's order item quantity modifier that enforces different maximum quantity limits based on user authentication status. It restricts the quantity of items that can be added to a cart by applying a lower default limit for anonymous users (using `syliusLimit`) and a higher limit for authenticated shop users (using `updLimit`), ensuring the target quantity never exceeds the applicable threshold before delegating to the underlying modifier.

## Classes
- `LimitingOrderItemQuantityModifier`

## Function Details

### `modify`

- **Parameters**: `OrderItemInterface $orderItem, int $targetQuantity`

