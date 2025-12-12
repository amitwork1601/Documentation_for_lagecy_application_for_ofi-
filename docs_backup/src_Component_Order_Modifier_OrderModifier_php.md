# OrderModifier.php

**Path**: `src\Component\Order\Modifier\OrderModifier.php`

## Summary
The `OrderModifier` class manages shopping cart operations by adding and removing order items while maintaining proper order state. It handles merging duplicate items (increasing quantities for identical items), processes order updates through the order processor, and manages checkout state transitions specifically for payment-skipped scenarios. This component serves as the core logic for cart modifications in an e-commerce system built on Sylius framework.

## Classes
- `OrderModifier`

## Function Details

### `addToOrder`

- **Parameters**: `OrderInterface $cart, OrderItemInterface $cartItem`

### `removeFromOrder`

- **Parameters**: `OrderInterface $cart, OrderItemInterface $item`

### `resolveOrderItem`

- **Parameters**: `OrderInterface $cart, OrderItemInterface $item`

