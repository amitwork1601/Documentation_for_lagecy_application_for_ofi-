# UnaddressedOrderApplicator.php

**Path**: `src\Applicator\UnaddressedOrderApplicator.php`

## Summary
The `UnaddressedOrderApplicator` class handles the scenario where a shipping method change requires resetting an order's checkout state back to unaddressed. When the shipping method changes and the order is beyond the "cart" or "addressed" states, it dispatches an `UnaddressedOrder` command to revert the checkout progress, ensuring the customer re-confirms their address with the new shipping option.

## Classes
- `UnaddressedOrderApplicator`

## Function Details

### `__construct`

- **Parameters**: `private MessageBusInterface $commandBus`

