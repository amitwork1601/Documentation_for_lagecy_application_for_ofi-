# UpsellItemProcessor.php

**Path**: `src\Order\Processor\UpsellItemProcessor.php`

## Summary
The `UpsellItemProcessor` class is an order processor that manages upsell items and their pricing adjustments within orders. It identifies applicable upsell offers for regular and subscription orders, then either applies or removes price adjustments to order items based on whether they qualify as upsell products, ensuring correct pricing when upsell promotions are active.

## Classes
- `UpsellItemProcessor`

## Function Details

### `process`

- **Parameters**: `OrderInterface $order`

### `getExistingAdjustement`

- **Parameters**: `OrderItem $item`

