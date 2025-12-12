# ProductVariantUpdatedMessageHandler.php

**Path**: `src\MessageHandler\ProductVariant\ProductVariantUpdatedMessageHandler.php`

## Summary
This message handler responds to product variant updates by checking for subscription orders that are in a "PRODUCT_UNAVAILABLE" state due to the updated variant. When a product variant becomes available again, it finds all affected subscription orders, verifies that all items in those subscriptions are now in stock, and processes the subscription orders through a state transition to resume them.

## Classes
- `ProductVariantUpdatedMessageHandler`

## Function Details

### `__invoke`

- **Parameters**: `ProductVariantUpdatedMessage $message`

