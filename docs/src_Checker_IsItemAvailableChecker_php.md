# IsItemAvailableChecker.php

**Path**: `src\Checker\IsItemAvailableChecker.php`

## Summary
This class validates whether all items in an order (including free products) are available for purchase. It checks that product variants are enabled, belong to enabled products, are associated with the specified channel, and handles special logic for subscription orders regarding partially sold-out items.

## Classes
- `IsItemAvailableChecker`

## Function Details

### `check`

- **Parameters**: `Order $order`

### `isAvailable`

- **Parameters**: `?ProductVariant $productVariant, ChannelInterface $channel, bool $allowPartiallySoldout`

