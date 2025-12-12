# UnaddressedOrderHandler.php

**Path**: `src\Api\CommandHandler\Checkout\UnaddressedOrderHandler.php`

## Summary
This handler processes commands to revert an order back to the cart state by removing address information during the checkout process. It retrieves an order by token, locks it for processing, applies a state machine transition to return the order to the `STATE_CART` checkout state if needed, and persists the changes to ensure the order is "unaddressed" and ready for address re-entry.

## Classes
- `UnaddressedOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `UnaddressedOrder $unsetAddressed`

