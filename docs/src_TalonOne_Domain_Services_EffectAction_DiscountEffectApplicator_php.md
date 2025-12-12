# DiscountEffectApplicator.php

**Path**: `src\TalonOne\Domain\Services\EffectAction\DiscountEffectApplicator.php`

## Summary
This class applies discount effects from the Talon.One promotion engine to orders in an e-commerce system. It handles different types of discount effects (per-item, per-additional-cost, or order-level), calculates the appropriate adjustment amounts while respecting minimum price constraints, and creates promotion adjustments that are applied to the corresponding order entities (order, order items, or order item units).

## Classes
- `DiscountEffectApplicator`

## Function Details

### `getOrderItem`

- **Parameters**: `OrderInterface $order, SetDiscountPerItemEffectInterface $effect`

### `getOrderItemUnit`

- **Parameters**: `OrderInterface $order, SetDiscountPerItemEffectInterface $effect`

### `calculate`

- **Parameters**: `int $itemTotal, int $minimumPrice, int $promotionAmount`

### `getVariantMinimumPrice`

- **Parameters**: `OrderInterface $subject, SetDiscountPerItemEffectInterface $effect`

