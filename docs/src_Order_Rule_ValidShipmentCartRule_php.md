# ValidShipmentCartRule.php

**Path**: `src\Order\Rule\ValidShipmentCartRule.php`

## Summary
This class validates that an order has a consistent shipping configuration by ensuring the order has shipments, a shipping address, and that the shipping address country is supported by the order's sales channel. It's a cart rule that prevents checkout when the shipping destination is invalid or incompatible with the channel's available countries, returning true for empty carts or false when shipment/address data is missing or the country is unsupported.

## Classes
- `ValidShipmentCartRule`

## Function Details

### `validate`

- **Parameters**: `OrderInterface $order, OrderRuleConditionInterface $condition`

### `getErrorMessage`


