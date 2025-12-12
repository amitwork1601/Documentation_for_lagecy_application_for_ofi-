# PaymentStateAction.php

**Path**: `src\Api\Controller\Order\PaymentStateAction.php`

## Summary
This API controller retrieves and returns the current payment state for a specific payment within an order. It validates the payment and order exist using their respective IDs/tokens, then returns a JSON response containing the payment's state and an optional human-readable label from the composite payment state provider, enabling clients to check payment status during the checkout or order management process.

## Classes
- `PaymentStateAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

