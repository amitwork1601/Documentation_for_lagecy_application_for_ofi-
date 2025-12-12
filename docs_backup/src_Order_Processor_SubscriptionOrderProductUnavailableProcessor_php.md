# SubscriptionOrderProductUnavailableProcessor.php

**Path**: `src\Order\Processor\SubscriptionOrderProductUnavailableProcessor.php`

## Summary
This processor checks if all products (both regular order items and free product adjustments) in a subscription order have become available in stock. When a subscription order is in an "unavailable_product" state, this processor validates that all product variants are now in stock, and if so, transitions the order back to a processable state by removing the unavailable product status.

## Classes
- `SubscriptionOrderProductUnavailableProcessor`

## Function Details

### `process`

- **Parameters**: `OrderInterface $order`

### `canBeProcessed`

- **Parameters**: `OrderInterface $order`

