# SubscriptionOrderItemProcessor.php

**Path**: `src\Order\Processor\SubscriptionOrderItemProcessor.php`

## Summary
This order processor manages subscription-related adjustments for order items in an e-commerce system. It iterates through order items and either adds subscription adjustments to items with subscribable product variants and valid subscription intervals, or removes existing subscription adjustments from items that are upsells, non-subscribable, or lack valid subscription intervals (for non-subscription orders).

## Classes
- `SubscriptionOrderItemProcessor`

## Function Details

### `process`

- **Parameters**: `OrderInterface $order`

