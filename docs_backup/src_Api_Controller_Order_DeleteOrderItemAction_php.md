# DeleteOrderItemAction.php

**Path**: `src\Api\Controller\Order\DeleteOrderItemAction.php`

## Summary
This API controller handles the deletion of items from a shopping cart/order in a Sylius e-commerce system. It validates the order token and item ID, dispatches a command to remove the item from the cart, and then checks if any free promotional products need to be removed as a consequence of the deletion (since removing items might invalidate promotion conditions that granted free products).

## Classes
- `DeleteOrderItemAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

